
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 56 to equal 96', (t) => {
  assert.strictEqual(sum(40, 56), 96);
});
