
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 97 to equal 140', (t) => {
  assert.strictEqual(sum(43, 97), 140);
});
