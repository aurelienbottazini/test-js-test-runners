
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 64 to equal 75', (t) => {
  assert.strictEqual(sum(11, 64), 75);
});
