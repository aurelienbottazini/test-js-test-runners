
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 39 to equal 52', (t) => {
  assert.strictEqual(sum(13, 39), 52);
});
