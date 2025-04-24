## template-alpine

[![alpine.webp](alpine.webp)](https://alpinejs.dev) [![tailwind.webp](tailwind.webp)](https://tailwindcss.com)  [![parcel.webp](parcel.webp)](https://parceljs.org)

### usage

```console
$ corepack pnpm run-script version

> @gbernard/template-alpine@0.0.1 version /home/user/git/template-alpine
> echo $npm_package_version

0.0.1

$ corepack pnpm install

$ corepack pnpm start

> @gbernard/template-alpine@0.0.1 prestart /home/user/git/template-alpine
> rimraf .parcel-cache dist


> @gbernard/template-alpine@0.0.1 start /home/user/git/template-alpine
> by-node-env


> @gbernard/template-alpine@0.0.1 start:development /home/user/git/template-alpine
> parcel serve --no-autoinstall

Server running at http://localhost:1234
✨ Built in 2.56s
^C

$ NODE_ENV=production corepack pnpm run-script build

> @gbernard/template-alpine@0.0.1 prebuild /home/user/git/template-alpine
> rimraf .parcel-cache dist


> @gbernard/template-alpine@0.0.1 build /home/user/git/template-alpine
> by-node-env


> @gbernard/template-alpine@0.0.1 build:production /home/user/git/template-alpine
> parcel build --no-autoinstall --no-source-maps

✨ Built in 3.11s

dist/index.html                                  1.62 kB    192ms
dist/favicon.935e6546.ico                          318 B     96ms
dist/alpine.f320d356.webp                        2.07 kB     85ms
dist/avatar.3cabab78.webp                       59.88 kB     94ms
dist/template-alpine.ea981013.css                 6.7 kB    151ms
dist/inter-latin-300-normal.6e5144af.woff2      24.06 kB     95ms
dist/inter-latin-300-normal.c524440e.woff       31.54 kB     85ms
dist/inter-latin-600-normal.cd71eff6.woff2       24.3 kB     95ms
dist/inter-latin-600-normal.27507079.woff       31.78 kB    143ms
dist/material-icons-outlined.af2186d9.woff2    155.28 kB    846ms
dist/material-icons-outlined.25bc5969.woff     182.03 kB    144ms
dist/template-alpine.8090eb1d.js                44.31 kB    883ms

> @gbernard/template-alpine@0.0.1 postbuild /home/user/git/template-alpine
> rimraf .parcel-cache

$ corepack pnpm run-script lint

> @gbernard/template-alpine@0.0.1 lint /home/user/git/template-alpine
> eslint --max-warnings=0 src/script.ts

$ corepack pnpm exec htmlhint dist

   Config loaded: /home/user/git/template-alpine/.htmlhintrc

Scanned 1 files, no errors found (17 ms).

$ corepack pnpm run-script clean

> @gbernard/template-alpine@0.0.1 clean /home/user/git/template-alpine
> rimraf .parcel-cache dist

$ make clean

/!\ cleaning...
rm -f -rv dist
rm -f -r .parcel-cache node_modules
...done
```

> MIT License  
> ghislain.bernard@gmail.com
