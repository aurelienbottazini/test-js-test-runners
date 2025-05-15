
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 47 to equal 114', (t) => {
  assert.strictEqual(sum(67, 47), 114);
});
