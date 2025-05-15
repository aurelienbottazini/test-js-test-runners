
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 81 to equal 157', (t) => {
  assert.strictEqual(sum(76, 81), 157);
});
