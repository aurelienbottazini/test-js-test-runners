
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 28 to equal 72', (t) => {
  assert.strictEqual(sum(44, 28), 72);
});
