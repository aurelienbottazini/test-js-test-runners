
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 3 to equal 97', (t) => {
  assert.strictEqual(sum(94, 3), 97);
});
