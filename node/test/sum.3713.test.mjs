
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 4 to equal 56', (t) => {
  assert.strictEqual(sum(52, 4), 56);
});
