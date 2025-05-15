
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 37 to equal 51', (t) => {
  assert.strictEqual(sum(14, 37), 51);
});
