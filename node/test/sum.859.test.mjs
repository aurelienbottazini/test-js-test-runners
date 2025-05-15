
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 59 to equal 119', (t) => {
  assert.strictEqual(sum(60, 59), 119);
});
