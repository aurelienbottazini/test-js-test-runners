
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 1 to equal 23', (t) => {
  assert.strictEqual(sum(22, 1), 23);
});
