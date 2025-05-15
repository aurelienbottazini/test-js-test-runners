
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 77 to equal 97', (t) => {
  assert.strictEqual(sum(20, 77), 97);
});
