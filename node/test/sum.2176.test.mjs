
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 70 to equal 97', (t) => {
  assert.strictEqual(sum(27, 70), 97);
});
