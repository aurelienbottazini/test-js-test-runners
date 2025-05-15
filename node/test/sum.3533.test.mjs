
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 39 to equal 137', (t) => {
  assert.strictEqual(sum(98, 39), 137);
});
