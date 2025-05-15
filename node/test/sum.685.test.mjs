
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 50 to equal 63', (t) => {
  assert.strictEqual(sum(13, 50), 63);
});
