
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 6 to equal 50', (t) => {
  assert.strictEqual(sum(44, 6), 50);
});
