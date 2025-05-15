
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 23 to equal 39', (t) => {
  assert.strictEqual(sum(16, 23), 39);
});
