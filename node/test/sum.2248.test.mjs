
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 98 to equal 197', (t) => {
  assert.strictEqual(sum(99, 98), 197);
});
