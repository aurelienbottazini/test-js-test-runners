
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 36 to equal 41', (t) => {
  assert.strictEqual(sum(5, 36), 41);
});
