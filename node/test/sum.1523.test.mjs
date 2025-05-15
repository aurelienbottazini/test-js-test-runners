
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 86 to equal 156', (t) => {
  assert.strictEqual(sum(70, 86), 156);
});
