
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 53 to equal 66', (t) => {
  assert.strictEqual(sum(13, 53), 66);
});
