
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 9 to equal 41', (t) => {
  assert.strictEqual(sum(32, 9), 41);
});
