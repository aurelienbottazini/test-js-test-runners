
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 44 to equal 57', (t) => {
  assert.strictEqual(sum(13, 44), 57);
});
