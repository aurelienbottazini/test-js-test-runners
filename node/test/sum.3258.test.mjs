
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 3 to equal 23', (t) => {
  assert.strictEqual(sum(20, 3), 23);
});
