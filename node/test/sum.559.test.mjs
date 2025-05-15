
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 90 to equal 97', (t) => {
  assert.strictEqual(sum(7, 90), 97);
});
