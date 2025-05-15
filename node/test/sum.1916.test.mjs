
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 45 to equal 119', (t) => {
  assert.strictEqual(sum(74, 45), 119);
});
