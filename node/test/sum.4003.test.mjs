
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 28 to equal 41', (t) => {
  assert.strictEqual(sum(13, 28), 41);
});
