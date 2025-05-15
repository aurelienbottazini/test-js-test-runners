
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 79 to equal 150', (t) => {
  assert.strictEqual(sum(71, 79), 150);
});
