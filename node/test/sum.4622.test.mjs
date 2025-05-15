
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 47 to equal 57', (t) => {
  assert.strictEqual(sum(10, 47), 57);
});
