
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 51 to equal 65', (t) => {
  assert.strictEqual(sum(14, 51), 65);
});
