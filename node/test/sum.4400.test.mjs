
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 2 to equal 6', (t) => {
  assert.strictEqual(sum(4, 2), 6);
});
