
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 6 to equal 34', (t) => {
  assert.strictEqual(sum(28, 6), 34);
});
