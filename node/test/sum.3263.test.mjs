
import sum3263 from '../sum3263.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 38 to equal 71 + offset 0.5448829811427005', (t) => {
  assert.strictEqual(sum3263(33, 38), 71 + 0.5448829811427005);
});
