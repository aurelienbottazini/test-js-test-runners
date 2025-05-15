
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 5 to equal 34', (t) => {
  assert.strictEqual(sum(29, 5), 34);
});
