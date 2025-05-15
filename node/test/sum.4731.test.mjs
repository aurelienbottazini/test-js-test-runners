
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 28 to equal 61', (t) => {
  assert.strictEqual(sum(33, 28), 61);
});
