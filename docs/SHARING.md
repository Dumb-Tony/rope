# External browser playtesting

Each game owns a separate Git repository and eventual remote. Inspect git remote -v before configuring a remote to avoid duplicates. Publish only this game's contents.

The first build is a self-contained root index.html, with relative paths only if assets are added later. GitHub Pages can serve it from main at the repository root; .nojekyll disables Jekyll processing. No build output, package registry, or server secrets are required.

Before shipping: verify local play, commit intended files, inspect the staged contents, create or reuse the authenticated user's game-specific repository according to C:\GPT_DEV\AGENTS.md, push, enable static deployment, wait for completion, and verify the public URL in a browser. Record the URL in README. Do not claim deployment readiness from a local preview alone. Do not include unrelated projects, credentials, or local diagnostics.

Public game: https://dumb-tony.github.io/rope/

Repository: https://github.com/Dumb-Tony/rope (origin). GitHub Pages serves main at the repository root. Initial gameplay commit: 57f0a72. Deployment run 34815148678 succeeded on 14 September 2026; the public URL then passed the full Edge browser suite, including a pointer-driven delivery and simulated overhead/recovery routes. See PLAYTEST.md for scope and limitations.

No license is selected yet; decide redistribution terms before accepting outside contributions.
