
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 25 to equal 38', (t) => {
  assert.strictEqual(sum(13, 25), 38);
});
