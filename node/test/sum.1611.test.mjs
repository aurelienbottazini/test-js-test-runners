
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 3 to equal 39', (t) => {
  assert.strictEqual(sum(36, 3), 39);
});
