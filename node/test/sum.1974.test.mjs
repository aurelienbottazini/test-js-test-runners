
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 15 + 79 to equal 94', (t) => {
  assert.strictEqual(sum(15, 79), 94);
});
