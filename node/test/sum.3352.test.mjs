
import sum3352 from '../sum3352.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 45 to equal 85 + offset 0.6824798273357321', (t) => {
  assert.strictEqual(sum3352(40, 45), 85 + 0.6824798273357321);
});
