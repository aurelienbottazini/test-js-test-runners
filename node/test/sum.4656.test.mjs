
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 92 to equal 136', (t) => {
  assert.strictEqual(sum(44, 92), 136);
});
