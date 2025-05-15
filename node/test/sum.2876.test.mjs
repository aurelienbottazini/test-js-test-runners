
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 19 to equal 82', (t) => {
  assert.strictEqual(sum(63, 19), 82);
});
