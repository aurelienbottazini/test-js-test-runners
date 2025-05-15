
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 49 to equal 119', (t) => {
  assert.strictEqual(sum(70, 49), 119);
});
