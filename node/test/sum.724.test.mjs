
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 36 to equal 61', (t) => {
  assert.strictEqual(sum(25, 36), 61);
});
