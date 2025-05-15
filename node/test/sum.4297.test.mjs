
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 7 to equal 34', (t) => {
  assert.strictEqual(sum(27, 7), 34);
});
