
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 28 to equal 59', (t) => {
  assert.strictEqual(sum(31, 28), 59);
});
