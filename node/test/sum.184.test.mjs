
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 84 to equal 119', (t) => {
  assert.strictEqual(sum(35, 84), 119);
});
