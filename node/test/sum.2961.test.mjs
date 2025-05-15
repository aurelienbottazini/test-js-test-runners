
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 41 to equal 55', (t) => {
  assert.strictEqual(sum(14, 41), 55);
});
