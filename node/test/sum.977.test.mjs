
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 7 to equal 16', (t) => {
  assert.strictEqual(sum(9, 7), 16);
});
