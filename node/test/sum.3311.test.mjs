
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 94 to equal 130', (t) => {
  assert.strictEqual(sum(36, 94), 130);
});
