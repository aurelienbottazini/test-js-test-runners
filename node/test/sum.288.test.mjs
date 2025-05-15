
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 21 to equal 34', (t) => {
  assert.strictEqual(sum(13, 21), 34);
});
