
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 52 to equal 119', (t) => {
  assert.strictEqual(sum(67, 52), 119);
});
