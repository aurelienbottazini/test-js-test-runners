
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 31 to equal 40', (t) => {
  assert.strictEqual(sum(9, 31), 40);
});
