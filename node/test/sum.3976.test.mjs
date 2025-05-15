
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 23 to equal 82', (t) => {
  assert.strictEqual(sum(59, 23), 82);
});
