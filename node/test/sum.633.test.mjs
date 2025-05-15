
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 4 to equal 34', (t) => {
  assert.strictEqual(sum(30, 4), 34);
});
