
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 4 to equal 17', (t) => {
  assert.strictEqual(sum(13, 4), 17);
});
