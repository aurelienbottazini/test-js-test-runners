
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 63 to equal 76', (t) => {
  assert.strictEqual(sum(13, 63), 76);
});
