
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 97 to equal 156', (t) => {
  assert.strictEqual(sum(59, 97), 156);
});
