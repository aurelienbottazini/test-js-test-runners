
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 14 to equal 55', (t) => {
  assert.strictEqual(sum(41, 14), 55);
});
