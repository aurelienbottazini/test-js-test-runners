
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 5 to equal 18', (t) => {
  assert.strictEqual(sum(13, 5), 18);
});
