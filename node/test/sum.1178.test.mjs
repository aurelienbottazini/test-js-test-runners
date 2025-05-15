
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 1 to equal 35', (t) => {
  assert.strictEqual(sum(34, 1), 35);
});
