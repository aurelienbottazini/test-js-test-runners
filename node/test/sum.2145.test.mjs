
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 85 to equal 119', (t) => {
  assert.strictEqual(sum(34, 85), 119);
});
