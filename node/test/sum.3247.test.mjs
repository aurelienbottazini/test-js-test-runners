
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 55 to equal 86', (t) => {
  assert.strictEqual(sum(31, 55), 86);
});
