
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 28 to equal 35', (t) => {
  assert.strictEqual(sum(7, 28), 35);
});
