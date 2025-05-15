
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 33 to equal 119', (t) => {
  assert.strictEqual(sum(86, 33), 119);
});
