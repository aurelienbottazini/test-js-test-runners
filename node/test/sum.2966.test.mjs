
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 84 to equal 122', (t) => {
  assert.strictEqual(sum(38, 84), 122);
});
