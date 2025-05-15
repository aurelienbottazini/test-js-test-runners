
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 9 to equal 22', (t) => {
  assert.strictEqual(sum(13, 9), 22);
});
