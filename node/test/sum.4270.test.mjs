
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 1 to equal 94', (t) => {
  assert.strictEqual(sum(93, 1), 94);
});
