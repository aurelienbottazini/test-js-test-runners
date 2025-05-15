
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 43 to equal 56', (t) => {
  assert.strictEqual(sum(13, 43), 56);
});
