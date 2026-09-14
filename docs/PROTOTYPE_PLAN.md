# Rope: first build milestone

## M0 — repository and design
Own Git repository, focused GDD, standalone browser entry point plan, playtest log, and sharing guide.

## M1 — playable core slice
1. Create index.html with embedded styles, code, controls, pause, and restart.
2. Implement the smallest readable scene: One side-view test yard: get a crate onto a raised platform, with two anchor points, a movable counterweight, and one rope. Support at least two plausible approaches, such as dragging by a ramp and redirecting a suspended load.
3. Implement consistent physical response: A visible segmented constrained rope with slack, tension, gravity, and endpoint attachment. Objects have mass and collide with terrain. Limit anchors to marked points initially. Explicitly defer arbitrary knots and robust wrapping; never imply they work if they do not.
4. Add objective detection: The crate must settle on the destination for a short dwell time. Verify pulling transfers force, slack does not push, releasing preserves momentum, and a failed arrangement can be reconfigured. Demonstrate two approaches if feasible; record missing support honestly.
5. Complete a success route and a recovery route, and inspect browser errors and resizing.
6. Commit a playable baseline and document controls, known simplifications, and checks actually performed.

## Scope gate
No campaign, progression economy, networking, asset pipeline, or dependency-heavy framework. Do not substitute a generic movement demo for the central mechanic. If a feature is too risky, document the reduction and preserve the core hypothesis.

## Later sharing milestone
Use this repository's own remote and static hosting; follow the parent project's standing instructions when shipping. Keep published contents limited to this game. Record the verified public URL and commit in README. First request prepares for later external testing; never report a public link before deployment succeeds.
