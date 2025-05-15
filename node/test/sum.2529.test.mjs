
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 81 to equal 95', (t) => {
  assert.strictEqual(sum(14, 81), 95);
});
