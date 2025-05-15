
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 23 to equal 61', (t) => {
  assert.strictEqual(sum(38, 23), 61);
});
