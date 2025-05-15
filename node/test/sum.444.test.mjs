
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 84 to equal 97', (t) => {
  assert.strictEqual(sum(13, 84), 97);
});
