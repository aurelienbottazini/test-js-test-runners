
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 61 to equal 97', (t) => {
  assert.strictEqual(sum(36, 61), 97);
});
