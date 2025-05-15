
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 21 to equal 97', (t) => {
  assert.strictEqual(sum(76, 21), 97);
});
