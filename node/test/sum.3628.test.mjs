
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 36 to equal 86', (t) => {
  assert.strictEqual(sum(50, 36), 86);
});
