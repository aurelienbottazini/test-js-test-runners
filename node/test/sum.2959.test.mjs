
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 13 to equal 97', (t) => {
  assert.strictEqual(sum(84, 13), 97);
});
