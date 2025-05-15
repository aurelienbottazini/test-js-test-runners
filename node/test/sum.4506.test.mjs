
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 74 to equal 119', (t) => {
  assert.strictEqual(sum(45, 74), 119);
});
