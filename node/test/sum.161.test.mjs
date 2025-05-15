
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 8 to equal 75', (t) => {
  assert.strictEqual(sum(67, 8), 75);
});
