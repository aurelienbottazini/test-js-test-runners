
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 13 to equal 56', (t) => {
  assert.strictEqual(sum(43, 13), 56);
});
