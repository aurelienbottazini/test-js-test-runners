
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 36 to equal 93', (t) => {
  assert.strictEqual(sum(57, 36), 93);
});
