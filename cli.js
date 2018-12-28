#!/usr/bin/env node

const fs = require('fs');
const meow = require('meow');
const readPkgUp = require('read-pkg-up');

const cli = meow(
  `
    Usage
      $ pkg-state
`,
  {
    flags: {
      cwd: {
        type: 'string',
        default: process.cwd()
      }
    }
  }
);

(async () => {
  const [name] = cli.input;
  const pkgData = await readPkgUp({cwd: cli.flags.cwd, normalization: false});

  const config = pkgData.pkg['pkg-state'][name];
  const nextPkg = {...pkgData.pkg, ...config};

  delete nextPkg.readme;
  delete nextPkg._id;

  fs.writeFileSync(pkgData.path, JSON.stringify(nextPkg, null, 2));
})();
