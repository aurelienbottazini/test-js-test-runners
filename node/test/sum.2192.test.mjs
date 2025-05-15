
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 31 to equal 38', (t) => {
  assert.strictEqual(sum(7, 31), 38);
});
