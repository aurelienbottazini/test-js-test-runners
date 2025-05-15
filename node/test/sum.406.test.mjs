
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 51 to equal 64', (t) => {
  assert.strictEqual(sum(13, 51), 64);
});
