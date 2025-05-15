
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 25 to equal 119', (t) => {
  assert.strictEqual(sum(94, 25), 119);
});
