
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 49 to equal 97', (t) => {
  assert.strictEqual(sum(48, 49), 97);
});
