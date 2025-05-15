
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 93 to equal 189', (t) => {
  assert.strictEqual(sum(96, 93), 189);
});
