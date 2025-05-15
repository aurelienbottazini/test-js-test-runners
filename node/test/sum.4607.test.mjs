
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 14 to equal 96', (t) => {
  assert.strictEqual(sum(82, 14), 96);
});
