# pkg-state

```json
{
  "name": "something-package-name",
  "pkg-state": {
    "predeploy": {
      "name": "temporarily-name"
    },
    "postdeploy": {
      "name": "something-package-name"
    }
  },
  "scripts": {
    "predeploy: "pkg-state predeploy",
    "deploy": ": ...",
    "postdeploy: "pkg-state postdeploy"
  }
}
```

In the above, when `yarn deploy`. `pkg.name` becomes `temporarily-name` until `postdeploy` runned.
