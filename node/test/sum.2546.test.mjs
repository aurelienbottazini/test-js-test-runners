
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 1 to equal 25', (t) => {
  assert.strictEqual(sum(24, 1), 25);
});
