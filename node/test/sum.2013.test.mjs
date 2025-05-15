
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 1 to equal 13', (t) => {
  assert.strictEqual(sum(12, 1), 13);
});
