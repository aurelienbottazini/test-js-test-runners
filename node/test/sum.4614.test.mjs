
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 8 to equal 38', (t) => {
  assert.strictEqual(sum(30, 8), 38);
});
