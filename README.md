<div align="center">
<h1>
  Stoat Frontend
  
  [![Stars](https://img.shields.io/github/stars/stoatchat/for-web?style=flat-square&logoColor=white)](https://github.com/stoatchat/for-web/stargazers)
  [![Forks](https://img.shields.io/github/forks/stoatchat/for-web?style=flat-square&logoColor=white)](https://github.com/stoatchat/for-web/network/members)
  [![Pull Requests](https://img.shields.io/github/issues-pr/stoatchat/for-web?style=flat-square&logoColor=white)](https://github.com/stoatchat/for-web/pulls)
  [![Issues](https://img.shields.io/github/issues/stoatchat/for-web?style=flat-square&logoColor=white)](https://github.com/stoatchat/for-web/issues)
  [![Contributors](https://img.shields.io/github/contributors/stoatchat/for-web?style=flat-square&logoColor=white)](https://github.com/stoatchat/for-web/graphs/contributors)
  [![License](https://img.shields.io/github/license/stoatchat/for-web?style=flat-square&logoColor=white)](https://github.com/stoatchat/for-web/blob/main/LICENSE)
</h1>
<<<<<<< HEAD
The official web client powering https://beta.revolt.chat/app, built with <a href="https://www.solidjs.com/">Solid.js</a> 💖. <br/>
Track the project roadmap on <a href="https://op.revolt.wtf/projects/revolt-for-web/roadmap">OpenProject</a>.
=======
The official web client powering https://stoat.chat/app, built with <a href="https://www.solidjs.com/">Solid.js</a> 💖. <br/>
Track the project roadmap on <a href="https://op.stoatinternal.com/projects/revolt-for-web/roadmap">OpenProject</a>.
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
</div>
<br/>

## Development Guide

<<<<<<< HEAD
Before contributing, make yourself familiar with [our contribution guidelines](https://developers.revolt.chat/contrib.html), the [code style guidelines](./GUIDELINES.md), and the [technical documentation for this project](https://revoltchat.github.io/frontend/).

Before getting started, you'll want to install:

- Git
- Node.js
- pnpm (run `corepack enable`)
=======
Before contributing, make yourself familiar with [our contribution guidelines](https://developers.stoat.chat/developing/contrib/), the [code style guidelines](./GUIDELINES.md), and the [technical documentation for this project](https://stoatchat.github.io/for-web/).

Before getting started, you'll want to install:

- [Git](https://git-scm.com/install/)
- [mise-en-place](https://mise.jdx.dev/getting-started.html)
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522

Then proceed to setup:

```bash
# clone the repository
git clone --recursive https://github.com/stoatchat/for-web client
cd client

# update submodules if you pull new changes
# git submodule init && git submodule update

# install all packages
<<<<<<< HEAD
pnpm i --frozen-lockfile

# build deps:
pnpm build:deps
=======
mise install:frozen

# build deps:
mise build:deps
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522

# or build a specific dep (e.g. stoat.js updates):
# pnpm --filter stoat.js run build

# customise the .env
cp packages/client/.env.example packages/client/.env

# run dev server
<<<<<<< HEAD
pnpm dev:web
=======
mise dev

# run all CI checks locally
mise check
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
```

Finally, navigate to http://local.revolt.chat:5173.

### Pulling in Stoat's brand assets

If you want to pull in Stoat brand assets after pulling, run the following:

```bash
# update the assets
git -c submodule."packages/client/assets".update=checkout submodule update --init packages/client/assets
```

You can switch back to the fallback assets by running deinit and continuing as normal:

```bash
# deinit submodule which clears directory
git submodule deinit packages/client/assets
```

## Deployment Guide

### Build the app

```bash
# install packages
<<<<<<< HEAD
pnpm i --frozen-lockfile

# build dependencies
pnpm build:deps

# build for web
pnpm build:web

# ... when building for Stoat production, use this instead of :web
pnpm build:prod
=======
mise install:frozen

# build dependencies
mise build:deps

# build for web
mise build

# ... when building for Stoat production
mise build:prod
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
```

You can now deploy the directory `packages/client/dist`.

### Routing Information

The app currently needs the following routes:

- `/login`
- `/pwa`
- `/dev`
- `/discover`
- `/settings`
- `/invite`
- `/bot`
- `/friends`
- `/server`
- `/channel`

<<<<<<< HEAD
This corresponds to [Content.tsx#L33](packages/client/src/index.tsx).
=======
This corresponds to [Content.tsx#L33](packages/client/src/index.tsx).
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
