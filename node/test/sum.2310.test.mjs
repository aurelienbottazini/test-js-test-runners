
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 11 to equal 72', (t) => {
  assert.strictEqual(sum(61, 11), 72);
});
