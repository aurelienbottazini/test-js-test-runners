
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 96 to equal 119', (t) => {
  assert.strictEqual(sum(23, 96), 119);
});
