
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 6 to equal 76', (t) => {
  assert.strictEqual(sum(70, 6), 76);
});
