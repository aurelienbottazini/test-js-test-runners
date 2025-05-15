
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 34 to equal 119', (t) => {
  assert.strictEqual(sum(85, 34), 119);
});
