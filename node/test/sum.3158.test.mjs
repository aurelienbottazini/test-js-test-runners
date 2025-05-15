
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 94 to equal 122', (t) => {
  assert.strictEqual(sum(28, 94), 122);
});
