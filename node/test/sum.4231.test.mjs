
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 46 to equal 97', (t) => {
  assert.strictEqual(sum(51, 46), 97);
});
