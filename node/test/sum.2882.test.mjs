
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 58 to equal 119', (t) => {
  assert.strictEqual(sum(61, 58), 119);
});
