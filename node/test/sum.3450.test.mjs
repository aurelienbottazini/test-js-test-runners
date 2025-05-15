
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 31 to equal 75', (t) => {
  assert.strictEqual(sum(44, 31), 75);
});
