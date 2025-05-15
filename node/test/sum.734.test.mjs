
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 50 to equal 82', (t) => {
  assert.strictEqual(sum(32, 50), 82);
});
