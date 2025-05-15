
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 92 to equal 150', (t) => {
  assert.strictEqual(sum(58, 92), 150);
});
