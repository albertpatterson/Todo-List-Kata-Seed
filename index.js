const watch = require('watch');
const cp = require('child_process');

let p;
// function run(){
//   console.log('running')
//   if(p && !p.killed){
//     console.log('kill prev')
//     // p.on('close', (code, signal)=>{
//     //   console.log('exited', code, signal);
//     //   runInner();
//     // });
//     p.kill();
//   }
//   // else{
//     runInner();
//   // }
// }

const runInnerThrottled = throttle(runInner);
function runInner(){
  console.log('launching test');
  p=cp.fork('runTest');
  p.on('exit', ()=>{
    console.log('test process closed');
    runInnerThrottled.reenable();
  });
}

watch.watchTree('.', runInnerThrottled);


function throttle(fcn) {
  let ready = true;

  const throttled = () => {
    if (!ready) {
      return;
    }
    fcn();
    ready = false;
  };

  throttled.reenable = ()=>{
    if(ready){
      throttled();
    }else{
      ready=true;
    }
  };

  return throttled;
}