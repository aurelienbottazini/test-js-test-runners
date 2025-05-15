
import sum2290 from '../sum2290.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 27 to equal 46 + offset 0.21230176134987466', (t) => {
  assert.strictEqual(sum2290(19, 27), 46 + 0.21230176134987466);
});
