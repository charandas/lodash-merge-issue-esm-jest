# lodash-merge-issue-esm-jest

To reproduce the issue:

1. `npm install` in `packages/some-esm-package`
2. `npm install` in `packages/some-es5-package`
3. `npm install` in root directory, followed by `npm test`.