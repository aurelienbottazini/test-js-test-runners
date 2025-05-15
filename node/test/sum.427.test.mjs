
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 78 to equal 97', (t) => {
  assert.strictEqual(sum(19, 78), 97);
});
