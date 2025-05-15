
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 79 to equal 80', (t) => {
  assert.strictEqual(sum(1, 79), 80);
});
