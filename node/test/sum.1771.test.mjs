
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 94 to equal 189', (t) => {
  assert.strictEqual(sum(95, 94), 189);
});
