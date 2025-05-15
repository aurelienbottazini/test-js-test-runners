
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 12 to equal 25', (t) => {
  assert.strictEqual(sum(13, 12), 25);
});
