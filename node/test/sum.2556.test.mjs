
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 63 to equal 99', (t) => {
  assert.strictEqual(sum(36, 63), 99);
});
