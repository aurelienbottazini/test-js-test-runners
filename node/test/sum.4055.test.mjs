
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 28 to equal 65', (t) => {
  assert.strictEqual(sum(37, 28), 65);
});
