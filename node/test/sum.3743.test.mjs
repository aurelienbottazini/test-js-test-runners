
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 15 + 19 to equal 34', (t) => {
  assert.strictEqual(sum(15, 19), 34);
});
