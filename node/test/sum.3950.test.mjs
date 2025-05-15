
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 28 to equal 119', (t) => {
  assert.strictEqual(sum(91, 28), 119);
});
