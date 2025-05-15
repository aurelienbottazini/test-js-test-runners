
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 5 to equal 11', (t) => {
  assert.strictEqual(sum(6, 5), 11);
});
