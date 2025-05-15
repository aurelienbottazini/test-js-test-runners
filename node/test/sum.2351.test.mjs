
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 61 to equal 156', (t) => {
  assert.strictEqual(sum(95, 61), 156);
});
