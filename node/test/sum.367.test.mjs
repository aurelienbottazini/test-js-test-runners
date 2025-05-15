
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 3 to equal 6', (t) => {
  assert.strictEqual(sum(3, 3), 6);
});
