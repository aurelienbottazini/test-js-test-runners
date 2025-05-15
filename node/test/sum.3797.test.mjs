
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 43 to equal 97', (t) => {
  assert.strictEqual(sum(54, 43), 97);
});
