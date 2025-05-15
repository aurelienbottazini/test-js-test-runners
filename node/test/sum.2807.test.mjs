
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 12 to equal 34', (t) => {
  assert.strictEqual(sum(22, 12), 34);
});
