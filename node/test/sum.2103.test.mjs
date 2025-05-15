
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 7 to equal 55', (t) => {
  assert.strictEqual(sum(48, 7), 55);
});
