
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 6 to equal 19', (t) => {
  assert.strictEqual(sum(13, 6), 19);
});
