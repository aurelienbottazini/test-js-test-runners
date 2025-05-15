
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 81 to equal 150', (t) => {
  assert.strictEqual(sum(69, 81), 150);
});
