
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 81 to equal 179', (t) => {
  assert.strictEqual(sum(98, 81), 179);
});
