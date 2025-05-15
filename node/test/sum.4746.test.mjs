
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 36 to equal 88', (t) => {
  assert.strictEqual(sum(52, 36), 88);
});
