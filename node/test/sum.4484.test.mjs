
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 87 to equal 96', (t) => {
  assert.strictEqual(sum(9, 87), 96);
});
