
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 8 to equal 76', (t) => {
  assert.strictEqual(sum(68, 8), 76);
});
