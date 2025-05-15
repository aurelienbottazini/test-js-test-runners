
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 44 to equal 51', (t) => {
  assert.strictEqual(sum(7, 44), 51);
});
