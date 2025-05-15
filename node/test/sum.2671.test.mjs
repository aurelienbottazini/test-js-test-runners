
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 53 to equal 65', (t) => {
  assert.strictEqual(sum(12, 53), 65);
});
