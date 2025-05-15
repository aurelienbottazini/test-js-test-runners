
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 39 to equal 47', (t) => {
  assert.strictEqual(sum(8, 39), 47);
});
