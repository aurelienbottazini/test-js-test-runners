
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 22 to equal 35', (t) => {
  assert.strictEqual(sum(13, 22), 35);
});
