
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 38 to equal 51', (t) => {
  assert.strictEqual(sum(13, 38), 51);
});
