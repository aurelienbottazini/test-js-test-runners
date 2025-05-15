
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 75 to equal 82', (t) => {
  assert.strictEqual(sum(7, 75), 82);
});
