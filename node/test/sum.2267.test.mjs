
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 7 to equal 96', (t) => {
  assert.strictEqual(sum(89, 7), 96);
});
