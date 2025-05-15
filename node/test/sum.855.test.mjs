
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 53 to equal 76', (t) => {
  assert.strictEqual(sum(23, 53), 76);
});
