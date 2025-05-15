
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 9 to equal 82', (t) => {
  assert.strictEqual(sum(73, 9), 82);
});
