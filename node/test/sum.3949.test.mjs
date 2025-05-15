
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 15 to equal 16', (t) => {
  assert.strictEqual(sum(1, 15), 16);
});
