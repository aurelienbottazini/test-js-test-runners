
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 55 to equal 55', (t) => {
  assert.strictEqual(sum(0, 55), 55);
});
