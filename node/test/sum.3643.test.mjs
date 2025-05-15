
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 6 to equal 59', (t) => {
  assert.strictEqual(sum(53, 6), 59);
});
