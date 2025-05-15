
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 0 to equal 56', (t) => {
  assert.strictEqual(sum(56, 0), 56);
});
