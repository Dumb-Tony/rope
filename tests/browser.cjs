const {chromium}=require('playwright');
const assert=require('assert');
(async()=>{
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:1280,height:900}}),errors=[];
page.on('pageerror',e=>errors.push(e.message));
await page.goto(process.env.ROPE_URL||'file:///C:/GPT_DEV/rope/index.html');
await page.locator('#reset').click();
const box=await page.locator('canvas').boundingBox();const point=(x,y)=>({x:box.x+x*box.width/1100,y:box.y+y*box.height/600});
let a=point(300,430),b=point(1000,250);
await page.mouse.move(a.x,a.y);await page.mouse.down();await page.mouse.move(b.x,b.y,{steps:25});
await page.waitForTimeout(9000);await page.mouse.up();await page.waitForTimeout(3000);
assert(await page.evaluate(()=>ropeTest.state().won),'real pointer ramp route');
await page.screenshot({path:'tests/yard-desktop.png',fullPage:true});
await page.keyboard.press('p');let state=await page.evaluate(()=>JSON.stringify(ropeTest.state()));await page.waitForTimeout(250);assert.equal(await page.evaluate(()=>JSON.stringify(ropeTest.state())),state);
await page.keyboard.press('r');assert(!(await page.evaluate(()=>ropeTest.state().won)));
// Fixed-step input replays in the real browser complement wall-clock pointer route.
const results=await page.evaluate(()=>{let t=ropeTest;t.action('reset');t.action('b');t.grab('hand',1030,320);t.key('KeyW',true);t.step(1450);t.key('KeyW',false);t.step(60);const airborne=t.state().crate.y;t.action('release');t.drop();t.step(900);let overhead=t.state().won;t.action('reset');t.grab('hand',700,250);t.step(240);t.action('release');t.drop();t.step(400);t.action('release');t.action('direct');t.grab('hand',850,250);t.key('KeyW',true);t.step(200);t.key('KeyW',false);t.step(1000);t.drop();t.step(600);return{airborne,overhead,recovery:t.state().won}});
assert(results.overhead&&results.recovery&&results.airborne<250);
await page.locator('#reset').click();
await page.screenshot({path:'tests/yard-start.png',fullPage:true});
await page.setViewportSize({width:390,height:844});
assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'no horizontal overflow');
await page.locator('#b').click();assert.equal(await page.evaluate(()=>ropeTest.state().guide),'b');
await page.screenshot({path:'tests/yard-mobile.png',fullPage:true});
await page.evaluate(()=>window.dispatchEvent(new Event('blur')));assert(await page.evaluate(()=>ropeTest.state().paused));
assert.deepEqual(errors,[]);console.log(JSON.stringify({browser:await browser.version(),pointerRamp:true,...results,pauseReset:true,resize:true,blurPause:true,errors},null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
