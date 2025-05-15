
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 15 to equal 97', (t) => {
  assert.strictEqual(sum(82, 15), 97);
});
