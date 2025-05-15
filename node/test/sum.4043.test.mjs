
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 19 to equal 97', (t) => {
  assert.strictEqual(sum(78, 19), 97);
});
