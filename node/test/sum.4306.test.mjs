
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 80 to equal 97', (t) => {
  assert.strictEqual(sum(17, 80), 97);
});
