
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 22 to equal 41', (t) => {
  assert.strictEqual(sum(19, 22), 41);
});
