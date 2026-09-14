# Playtest log

## 14 September 2026 — first playable baseline

Environment: Windows, Node 24.19.0 for deterministic physics tests; headless Microsoft Edge 153.0.4234.32 through Playwright for real-browser tests. Build: first prototype commit (locate with `git log --grep="Build playable Rope"`). Tests are committed in tests/physics.cjs and tests/browser.cjs. These are automated input replays and screenshot inspection, not manual feel testing. No external testers yet.

### Actual results
- Full direct route: grabbed the hand end, pulled toward yard coordinate (1000,250), held 7.5 simulated seconds, released and allowed 5 seconds to settle. Crate center ended at x=755.37; objective passed.
- Browser pointer route: actual mouse events grabbed the ring and dragged right/up, held 9 wall-clock seconds and released. Objective passed after settling. No object positions were edited.
- Overhead route: selected guide B, held the hand toward (1030,320), reeled in for 1450 fixed steps (12.08 seconds), then waited 60 steps. Crate was suspended at y=229.13 (deck-resting center is y=318). Detached and let it fall. Final x=799.05; objective passed. This route is timing-sensitive, not a guaranteed automatic solution.
- Recovery: pulled briefly toward (700,250), detached early and allowed the crate to fall back. Reattached, selected direct routing, pulled toward (850,250), reeled for 200 steps and let it settle. Delivered without resetting.
- Slack: untouched crate remained at x=175 with zero measured tension over initial steps. The cable did not push.
- Pulling: hand movement displaced the crate through cable tension.
- Momentum: crate horizontal and vertical velocity values were exactly preserved by detaching the endpoint.
- Counterweight: lifted the weight toward (960,55), selected guide B and weight endpoint, then dropped it. Crate moved 147.25 pixels toward the guide under the falling weight. A counterweight-only full delivery has NOT been demonstrated.
- Pause: 500 simulated steps left all state unchanged. Reset restored initial arrangement and cleared pause/win/input state.
- Stability: 10,000 additional steps while repeatedly changing guides and reeling; all body positions and velocities remained finite.
- Browser: full overhead and recovery replays also passed in Edge. No JavaScript page errors. 1280-pixel desktop and 390-pixel narrow view checked; no horizontal page overflow. Narrow toolbar remains operable; keyboard reel input is still required. Focus loss paused play.
- Desktop and narrow screenshots inspected. Labels, destination, controls and objective were visible. Small yard labels become tiny on phones; desktop remains the target.

### Findings and limits
Public verification: GitHub Pages deployment of gameplay commit `57f0a72` succeeded. Repeated the browser suite against https://dumb-tony.github.io/rope/ on 14 September 2026: actual pointer ramp delivery, overhead/recovery replays, pause/reset, narrow layout, blur pause and zero JavaScript page errors all passed. The initial restricted-network attempt was denied by the environment; the authorized network run passed.

Two approaches are demonstrated, including an airborne release, but both use externally powered hand/reel input. The 8 kg counterweight transfers force; it has not passed a full delivery on its own. This is evidence for a playable force-routing experiment, not evidence of a balanced physical puzzle.

The cable is a tension-only total-length solver. Its segmented constrained sag visualization is not a distributed-mass force simulation. There is no rope/scenery collision, wrapping, knots, body rotation, or energy conservation when changing setups. Terrain uses center-sampled ramp contact, so box corners may intersect the incline. Guide A configuration is included in stability checks, but no full Guide A delivery route is claimed. Only Edge was tested; Firefox, Safari and mobile touch feel remain untested.

Next playtest questions: Can a new player grab the ring within 30 seconds? Do they understand why slack does nothing? Can they predict a release landing? Can they recover without reaching for Reset? Tune drag/reel strength and instructions from these answers before adding content.

For each session record: date, commit, browser, input method, successful route, recovery attempt, observed result, bugs, and next tuning decision. Distinguish automated checks from manual feel feedback.

Acceptance scenario: The crate must settle on the destination for a short dwell time. Verify pulling transfers force, slack does not push, releasing preserves momentum, and a failed arrangement can be reconfigured. Demonstrate two approaches if feasible; record missing support honestly.
