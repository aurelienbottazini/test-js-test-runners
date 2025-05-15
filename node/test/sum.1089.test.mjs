
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 32 to equal 41', (t) => {
  assert.strictEqual(sum(9, 32), 41);
});
