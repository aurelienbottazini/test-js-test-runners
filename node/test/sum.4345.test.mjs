
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 8 to equal 11', (t) => {
  assert.strictEqual(sum(3, 8), 11);
});
