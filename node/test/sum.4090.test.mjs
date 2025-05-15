
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 9 to equal 23', (t) => {
  assert.strictEqual(sum(14, 9), 23);
});
