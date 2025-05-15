
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 81 to equal 155', (t) => {
  assert.strictEqual(sum(74, 81), 155);
});
