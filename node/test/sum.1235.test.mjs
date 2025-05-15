
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 90 to equal 119', (t) => {
  assert.strictEqual(sum(29, 90), 119);
});
