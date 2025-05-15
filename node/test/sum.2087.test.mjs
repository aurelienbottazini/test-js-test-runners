
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 21 to equal 52', (t) => {
  assert.strictEqual(sum(31, 21), 52);
});
