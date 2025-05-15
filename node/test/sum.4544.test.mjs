
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 51 to equal 93', (t) => {
  assert.strictEqual(sum(42, 51), 93);
});
