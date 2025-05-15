
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 88 to equal 89', (t) => {
  assert.strictEqual(sum(1, 88), 89);
});
