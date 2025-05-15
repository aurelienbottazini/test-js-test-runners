
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 69 to equal 93', (t) => {
  assert.strictEqual(sum(24, 69), 93);
});
