
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 57 to equal 115', (t) => {
  assert.strictEqual(sum(58, 57), 115);
});
