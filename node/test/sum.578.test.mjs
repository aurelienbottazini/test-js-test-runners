
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 56 to equal 131', (t) => {
  assert.strictEqual(sum(75, 56), 131);
});
