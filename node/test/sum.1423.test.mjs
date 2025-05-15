
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 12 to equal 41', (t) => {
  assert.strictEqual(sum(29, 12), 41);
});
