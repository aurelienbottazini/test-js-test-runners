
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 43 to equal 55', (t) => {
  assert.strictEqual(sum(12, 43), 55);
});
