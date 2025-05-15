
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 34 to equal 56', (t) => {
  assert.strictEqual(sum(22, 34), 56);
});
