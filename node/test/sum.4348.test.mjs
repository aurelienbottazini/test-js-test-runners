
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 95 to equal 96', (t) => {
  assert.strictEqual(sum(1, 95), 96);
});
