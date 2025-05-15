
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 28 to equal 89', (t) => {
  assert.strictEqual(sum(61, 28), 89);
});
