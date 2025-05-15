
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 27 to equal 40', (t) => {
  assert.strictEqual(sum(13, 27), 40);
});
