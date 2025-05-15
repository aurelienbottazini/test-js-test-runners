
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 21 to equal 65', (t) => {
  assert.strictEqual(sum(44, 21), 65);
});
