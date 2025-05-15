
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 79 to equal 97', (t) => {
  assert.strictEqual(sum(18, 79), 97);
});
