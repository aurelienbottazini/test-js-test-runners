
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 97 to equal 189', (t) => {
  assert.strictEqual(sum(92, 97), 189);
});
