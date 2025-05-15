
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 33 to equal 46', (t) => {
  assert.strictEqual(sum(13, 33), 46);
});
