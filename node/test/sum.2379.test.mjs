
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 16 to equal 97', (t) => {
  assert.strictEqual(sum(81, 16), 97);
});
