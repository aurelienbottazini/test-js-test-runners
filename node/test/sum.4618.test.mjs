
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 5 to equal 41', (t) => {
  assert.strictEqual(sum(36, 5), 41);
});
