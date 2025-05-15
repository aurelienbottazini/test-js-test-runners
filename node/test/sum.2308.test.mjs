
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 37 to equal 119', (t) => {
  assert.strictEqual(sum(82, 37), 119);
});
