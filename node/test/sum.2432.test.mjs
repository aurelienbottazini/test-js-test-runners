
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 56 to equal 67', (t) => {
  assert.strictEqual(sum(11, 56), 67);
});
