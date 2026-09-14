# Rope

Independent browser game prototype exploring Creative force routing and open-ended physical problem solving. Objectives describe an outcome, not an ordered solution.

## Play
[Play Rope](https://dumb-tony.github.io/rope/)

Public deployment verified on 14 September 2026, including browser delivery and recovery tests. Gameplay baseline: `57f0a72`. [Source repository](https://github.com/Dumb-Tony/rope).

First playable test yard: deliver the 4 kg crate to the gold destination and let it settle for 1.5 seconds. Two automated success routes are demonstrated: direct ramp pulling and an overhead lift followed by release. No score, upgrades, or required solution sequence.

You can also open `index.html` directly in a desktop browser. It contains all code and artwork, needs no installation, and makes no network requests.

## Controls
- Drag the gold hand ring to pull; let go to release your grip.
- W / S: shorten / lengthen the rope (an external powered reel).
- 1 / 2: connect the far end to the hand ring / 8 kg counterweight.
- 3 / 4 / 5: direct rope / overhead guide A / overhead guide B.
- Drag the counterweight to position or raise it, then let it fall.
- Space: detach or reattach the crate. P: pause. R: reset.

Buttons provide attachment, pause and reset controls. Losing window focus pauses automatically. Keyboard and pointer on desktop are recommended; the narrow layout fits a phone, but touch-only play lacks reel controls.

## Physics and limits
Bodies have mass, gravity, momentum, terrain contact and mutual collision. A unilateral total cable-length constraint transfers pulling force and never pushes through slack. Marked guides are ideal frictionless redirects; switching arrangements feeds enough rope to avoid an immediate teleporting tug.

The visible rope uses 24 constrained sagging segments per span. This is a hybrid model: endpoint force uses total cable length, while the segments display slack under gravity. Individual segments do not transmit their own mass or collide with terrain. Rope can cross the ramp and scenery. No arbitrary wrapping, knots, body rotation, physical winding mechanism, rope breakage or energy-conserving reconfiguration. The reel and dragging add energy. Guides introduce a deliberately simplified pulley-like behavior earlier than the original GDD proposed.

## Validation
See [the actual playtest log](docs/PLAYTEST.md) for successful routes, recovery, browser coverage and limits. `node tests/physics.cjs` runs dependency-free deterministic regressions from this directory. `tests/browser.cjs` additionally needs Playwright and installed Edge; those are developer tools only. No manual human feel session or external playtest has yet occurred.

## Project map
- docs/GDD.md — focused design and prototype boundaries
- docs/PROTOTYPE_PLAN.md — first build and acceptance criteria
- docs/PLAYTEST.md — actual test evidence and feedback
- docs/SHARING.md — remote and static-host preparation
- assets/ — future project-owned assets only

This folder owns its own Git history. Do not initialize a repository in C:\\GPT_DEV or add sibling projects.
