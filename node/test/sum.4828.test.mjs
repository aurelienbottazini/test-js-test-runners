
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 15 + 1 to equal 16', (t) => {
  assert.strictEqual(sum(15, 1), 16);
});
