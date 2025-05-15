
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 85 to equal 156', (t) => {
  assert.strictEqual(sum(71, 85), 156);
});
