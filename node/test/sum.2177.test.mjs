
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 74 to equal 82', (t) => {
  assert.strictEqual(sum(8, 74), 82);
});
