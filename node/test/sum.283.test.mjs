
import sum283 from '../sum283.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 47 to equal 139 + offset 0.025005051538900425', (t) => {
  assert.strictEqual(sum283(92, 47), 139 + 0.025005051538900425);
});
