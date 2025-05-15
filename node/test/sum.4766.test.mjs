
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 11 to equal 51', (t) => {
  assert.strictEqual(sum(40, 11), 51);
});
