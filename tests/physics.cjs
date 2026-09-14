const fs=require('fs'),vm=require('vm'),assert=require('assert');
const code=fs.readFileSync('index.html','utf8').split('<script>')[1].split('</script>')[0];
function setup(){let els={};const el=()=>({classList:{toggle(){}},addEventListener(){},getContext:()=>({}),textContent:''});const box={document:{querySelector:()=>el(),getElementById:id=>els[id]??=el(),querySelectorAll:()=>[],addEventListener(){}},window:{addEventListener(){}},requestAnimationFrame(){},console};vm.createContext(box);vm.runInContext(code,box);return box.window.ropeTest}
function ramp(t){t.grab('hand',1000,250);t.step(900);t.drop();t.step(600);assert(t.state().won,'ramp delivery');return t.state().crate.x}
let t=setup();console.log('PASS full ramp route',ramp(t));
t=setup();t.action('b');t.grab('hand',1030,320);t.key('KeyW',true);t.step(1450);t.key('KeyW',false);t.step(60);assert(t.state().crate.y<250,'suspended load clears deck');t.action('release');t.drop();t.step(900);assert(t.state().won,'suspended release delivery');console.log('PASS overhead lift and release',t.state().crate.x);
t=setup();t.grab('hand',700,250);t.step(240);t.action('release');t.drop();t.step(400);assert(!t.state().won);t.action('release');t.action('direct');t.grab('hand',850,250);t.key('KeyW',true);t.step(200);t.key('KeyW',false);t.step(1000);t.drop();t.step(600);assert(t.state().won,'recovery without reset');console.log('PASS failed arrangement reattached and recovered');
t=setup();t.step(15);assert(Math.abs(t.state().crate.x-175)<1e-9,'slack must not push');assert.equal(t.state().tension,0);console.log('PASS slack does not push');
t=setup();t.grab('hand',1000,250);t.step(300);const before=t.state();assert(before.crate.x>200,'force transfer');t.action('release');const after=t.state();assert.equal(before.crate.vx,after.crate.vx);assert.equal(before.crate.vy,after.crate.vy);console.log('PASS tension transfers force and detach preserves velocity');
t.action('pause');const frozen=JSON.stringify(t.state());t.step(500);assert.equal(JSON.stringify(t.state()),frozen);t.action('reset');assert.equal(t.state().crate.x,175);assert(!t.state().paused);console.log('PASS pause and reset');
t=setup();t.action('b');t.grab('weight',960,55);t.step(360);t.action('weight');t.drop();const x=t.state().crate.x;t.step(360);assert(t.state().crate.x>x+10,'falling weight transfers force');console.log('PASS falling counterweight moves crate',t.state().crate.x-x);
for(let i=0;i<100;i++){t.action(i%2?'a':'b');t.key('KeyW',true);t.step(100);t.key('KeyW',false);for(const b of ['crate','weight','hand'])for(const prop of ['x','y','vx','vy'])assert(Number.isFinite(t.state()[b][prop]));}console.log('PASS 10,000-step reconfiguration stability');


