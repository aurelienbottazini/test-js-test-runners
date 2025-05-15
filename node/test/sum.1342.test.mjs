
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 0 to equal 93', (t) => {
  assert.strictEqual(sum(93, 0), 93);
});
