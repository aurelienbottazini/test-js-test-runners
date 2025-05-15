
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 55 to equal 93', (t) => {
  assert.strictEqual(sum(38, 55), 93);
});
