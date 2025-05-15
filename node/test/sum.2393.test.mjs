
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 9 to equal 40', (t) => {
  assert.strictEqual(sum(31, 9), 40);
});
