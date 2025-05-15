
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 20 to equal 76', (t) => {
  assert.strictEqual(sum(56, 20), 76);
});
