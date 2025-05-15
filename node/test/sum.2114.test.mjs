
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 4 to equal 11', (t) => {
  assert.strictEqual(sum(7, 4), 11);
});
