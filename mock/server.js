const http = require('http');
const fs = require('fs');
const url = require('url');
const PORT = 4000;

const sliders = require('./sliders');

function read(cb) {
  fs.readFile("./mock/GPUs.json", 'utf8', function (err, data) {
    if (err || data.length === 0) {
      console.log(err);
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  })
}
function del(data,cb){
  fs.writeFile('./mock/GPUs.json',JSON.stringify(data),cb);
}
function write(data,cb){
  fs.writeFile('./mock/GPUs.json',JSON.stringify(data),cb);
}
let pageSize = 5;
let server=http.createServer((req, res) => {

  //设置跨域请求头
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1');
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  res.setHeader("Access-Control-Allow-Headers","content-type");

  if (req.method == 'OPTIONS') return res.end(); /*让options请求快速返回*/

  //请求接口
  let {pathname, query} = url.parse(req.url,true);//设置true把query转化为对象属性
  if (pathname === '/page'){
    let pageNum =parseInt(query.pageNum) || 0;
    read(GPUs=>{
      let result;
      if(pageNum <= 1){
        result = GPUs.slice(0,pageSize);
      }else{
        result = GPUs.slice((pageNum-1)*pageSize,pageNum*pageSize);
      }
      let hasMore = true;
      if (GPUs.length <= pageNum*pageSize) {
        hasMore=false;
      }
      res.end(JSON.stringify({gpus:result,hasMore,pageSize}));
    })
  }
  if (pathname === '/sliders') {
    res.end(JSON.stringify(sliders));
  }
  if (pathname === '/hotgpus'){
    read(function (data) {
      let Hotgpus = data.reverse().splice(0,6);
      res.end(JSON.stringify(Hotgpus));
    });
  }
  if (pathname === '/gpu'){
    let id = parseInt(query.id);
    switch (req.method) {
      case 'GET':
        if (id){
            read(function (data) {
              let gpu = data.find(item=>item.GPUId === id);
              if (!gpu) gpu={};
              res.end(JSON.stringify(gpu));
            })
        }else{
          read(function (data) {
            res.end(JSON.stringify(data));
          })
        }
        break;
      case 'POST':
        let str='';
        req.on('data',(chunk)=>{
          str+=chunk;
        });
        req.on('end',()=>{
          let gpu = JSON.parse(str);
          read((GPUs)=>{
            gpu.GPUId = GPUs.length?GPUs[GPUs.length-1].GPUId+1:1;
            GPUs.push(gpu);
            write(GPUs,()=>{
              res.end(JSON.stringify('添加成功!'))
            })
          })
        });
        break;
      case 'PUT':
        if(id){
          let str = '';
          req.on('data',chunk=>{
            str+=chunk;
          });
          req.on('end',()=>{
            let gpu = JSON.parse(str);
            read((GPUs)=>{
              GPUs = GPUs.map(item=>{
                if (item.GPUId === id){
                  return gpu;
                }
                return item;
              });
              write(GPUs,()=>{
                res.end(JSON.stringify("修改成功!"));
              })
            })
          })
        }
        break;
      case 'DELETE':
          read(function (data) {
            data = data.filter(item => item.GPUId !== id);
            del(data,function () {
              res.end(JSON.stringify({}));
            })
          });
        break;
    }
  }
}).on('error', (e) => {
  console.error(`出现错误: ${e.message}`);
});
server.listen(PORT);
console.log('Server listen on port:' + PORT);

