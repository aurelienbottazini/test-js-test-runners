
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 60 to equal 119', (t) => {
  assert.strictEqual(sum(59, 60), 119);
});
