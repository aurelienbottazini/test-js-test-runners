
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 39 to equal 89', (t) => {
  assert.strictEqual(sum(50, 39), 89);
});
