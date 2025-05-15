
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 73 to equal 156', (t) => {
  assert.strictEqual(sum(83, 73), 156);
});
