
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 64 to equal 135', (t) => {
  assert.strictEqual(sum(71, 64), 135);
});
