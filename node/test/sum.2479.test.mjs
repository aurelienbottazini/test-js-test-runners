
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 2 to equal 65', (t) => {
  assert.strictEqual(sum(63, 2), 65);
});
