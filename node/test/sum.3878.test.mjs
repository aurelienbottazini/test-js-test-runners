
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 12 to equal 65', (t) => {
  assert.strictEqual(sum(53, 12), 65);
});
