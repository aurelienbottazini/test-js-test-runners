
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 1 to equal 65', (t) => {
  assert.strictEqual(sum(64, 1), 65);
});
