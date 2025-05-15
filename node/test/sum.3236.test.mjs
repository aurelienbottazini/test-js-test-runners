
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 14 to equal 16', (t) => {
  assert.strictEqual(sum(2, 14), 16);
});
