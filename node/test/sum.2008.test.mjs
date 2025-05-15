
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 0 to equal 23', (t) => {
  assert.strictEqual(sum(23, 0), 23);
});
