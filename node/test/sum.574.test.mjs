
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 12 to equal 13', (t) => {
  assert.strictEqual(sum(1, 12), 13);
});
