
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 23 to equal 97', (t) => {
  assert.strictEqual(sum(74, 23), 97);
});
