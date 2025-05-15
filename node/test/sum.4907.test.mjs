
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 36 to equal 59', (t) => {
  assert.strictEqual(sum(23, 36), 59);
});
