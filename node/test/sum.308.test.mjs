
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 51 to equal 72', (t) => {
  assert.strictEqual(sum(21, 51), 72);
});
