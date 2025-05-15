
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 87 to equal 150', (t) => {
  assert.strictEqual(sum(63, 87), 150);
});
