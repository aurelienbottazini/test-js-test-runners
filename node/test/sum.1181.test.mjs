
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 56 to equal 120', (t) => {
  assert.strictEqual(sum(64, 56), 120);
});
