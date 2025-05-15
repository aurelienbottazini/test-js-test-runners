
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 21 to equal 92', (t) => {
  assert.strictEqual(sum(71, 21), 92);
});
