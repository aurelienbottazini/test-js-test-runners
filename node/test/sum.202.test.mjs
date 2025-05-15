
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 10 to equal 103', (t) => {
  assert.strictEqual(sum(93, 10), 103);
});
