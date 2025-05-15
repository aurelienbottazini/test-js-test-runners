
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 36 to equal 72', (t) => {
  assert.strictEqual(sum(36, 36), 72);
});
