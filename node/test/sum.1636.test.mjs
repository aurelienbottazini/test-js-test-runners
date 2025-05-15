
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 13 to equal 71', (t) => {
  assert.strictEqual(sum(58, 13), 71);
});
