
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 96 to equal 189', (t) => {
  assert.strictEqual(sum(93, 96), 189);
});
