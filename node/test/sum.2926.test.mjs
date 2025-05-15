
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 95 to equal 97', (t) => {
  assert.strictEqual(sum(2, 95), 97);
});
