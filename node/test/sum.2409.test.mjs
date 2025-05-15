
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 1 to equal 76', (t) => {
  assert.strictEqual(sum(75, 1), 76);
});
