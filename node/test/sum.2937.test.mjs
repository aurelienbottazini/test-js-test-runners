
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 22 to equal 72', (t) => {
  assert.strictEqual(sum(50, 22), 72);
});
