
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 22 to equal 65', (t) => {
  assert.strictEqual(sum(43, 22), 65);
});
