# Rope — first-pass GDD

Status: first playable prototype implemented and automatically tested, 14 September 2026. Human feel and external playtesting pending. Source: Game Ideas Planning (conversation 6aa70669-0724-83ea-8d1a-5398e0350b84).

## Fantasy and identity
Here is a problem. Here is some rope. Figure it out.

Creative force routing and open-ended physical problem solving. Objectives describe an outcome, not an ordered solution.

## Design pillars
Tiny control set. Physical mastery rather than stat upgrades. Readable cause and effect. A disaster should usually create another problem instead of stopping play. Skill progression is new situation → struggle → understand → master → harder situation. No skill trees, rarity tiers, or arbitrary balance bonuses.

## Core loop
Observe the situation, act with the core tool/body, read the physical response, correct or recover, complete the objective, and retry for a cleaner approach. Restart is always a deliberate option, never the default consequence of a small mistake.

## Proposed controls
Pointer drags the hand end or the counterweight. W/S reels or feeds rope. 1/2 selects the far endpoint; 3/4/5 selects direct or either marked guide. Space detaches/reattaches the crate; P pauses; R resets. The toolbar duplicates configuration controls. A/D movement was omitted because this slice has no avatar.

## First standalone HTML vertical slice
One side-view test yard: get a crate onto a raised platform, with two anchor points, a movable counterweight, and one rope. Support at least two plausible approaches, such as dragging by a ramp and redirecting a suspended load.

A visible segmented constrained rope with slack, tension, gravity, and endpoint attachment. Objects have mass and collide with terrain. Limit anchors to marked points initially. Explicitly defer arbitrary knots and robust wrapping; never imply they work if they do not.

Desktop keyboard and pointer first. Make a self-contained index.html with embedded CSS and JavaScript, procedural visuals, no CDN, no installation, and no required network requests. Render with Canvas or native browser graphics. Use a fixed simulation step, bounded frame catch-up, and clear input state on focus loss. Physics may be simplified but must remain consistent and disclosed.

## Success and recovery
The crate must settle on the destination for a short dwell time. Verify pulling transfers force, slack does not push, releasing preserves momentum, and a failed arrangement can be reconfigured. Demonstrate two approaches if feasible; record missing support honestly.

## Mastery and replay hypothesis
First 30 seconds: tug an object and see tension. Ten hours: read forces and exploit geometry. Long-term hypothesis: different masses, anchors, and rope behaviors support player-authored solutions.

## Beyond the prototype
The first slice now includes ideal frictionless marked guides to test redirection. This moves simplified pulley behavior earlier than planned, without simulating wheels or wrapping. Further pulley complexity waits for human feedback on basic force transmission. Rope materials may later change elasticity, weight, and strength instead of becoming numerical upgrades. Later challenges: lower a piano, recover a truck, cross a gap. Defer vehicles, knot simulation, and community tooling.

## Implemented physics boundary
Fixed 120 Hz simulation, 50 ms maximum catch-up. The 4 kg crate and 8 kg counterweight are translating squares with inverse-mass collision response, gravity, damping and a sampled ramp surface. The hand end is a light physical body controlled by a bounded spring, not a teleporting cursor. Detaching does not overwrite velocity. The objective requires the entire crate within the destination, low speed, platform contact and 1.5 seconds of dwell.

The force solver constrains the total routed cable length with tension-only position and velocity corrections. Visible rope spans each have 24 gravity-driven constrained segments. These segments visualize sag separately from the endpoint solver; distributed rope inertia is not implemented. Segment sag is updated at render cadence, so its appearance is frame-rate dependent, while body simulation is fixed-step. Rope does not collide with terrain or objects. Reconfiguration, powered reeling and dragging can inject energy. These reductions must remain explicit in playtester materials.

## Main risk
Constraint instability, fake force transmission, and a single scripted solution are the biggest risks. Keep the scene small and expose enough motion to understand why an attempt failed.

## Presentation and accessibility
Readable shapes and silhouettes before decorative assets. Persistent short controls and objective text. Show interaction eligibility before input. Do not rely on color alone. Provide restart and pause, reduced camera shake, and a useful window-size response. Sound is optional; do not block play on autoplay permission.

## Validation gate
A new player should start interacting within 30 seconds. Run an entire successful objective, intentionally cause a recoverable mistake, and complete after recovery. Record automated browser checks separately from manual feel testing. Ask playtesters what caused their failure, whether correction felt possible, and whether they wanted another attempt. Choose the next milestone from this evidence rather than adding content automatically.
