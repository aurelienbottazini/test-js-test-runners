
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 51 to equal 82', (t) => {
  assert.strictEqual(sum(31, 51), 82);
});
