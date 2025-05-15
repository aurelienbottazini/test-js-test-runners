
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 21 to equal 51', (t) => {
  assert.strictEqual(sum(30, 21), 51);
});
