
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 2 to equal 15', (t) => {
  assert.strictEqual(sum(13, 2), 15);
});
