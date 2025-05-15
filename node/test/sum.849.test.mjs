
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 23 to equal 116', (t) => {
  assert.strictEqual(sum(93, 23), 116);
});
