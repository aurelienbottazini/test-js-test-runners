
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 96 to equal 122', (t) => {
  assert.strictEqual(sum(26, 96), 122);
});
