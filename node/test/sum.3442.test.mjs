
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 8 to equal 34', (t) => {
  assert.strictEqual(sum(26, 8), 34);
});
