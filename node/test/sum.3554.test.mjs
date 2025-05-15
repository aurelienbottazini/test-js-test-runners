
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 0 to equal 24', (t) => {
  assert.strictEqual(sum(24, 0), 24);
});
