
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 97 to equal 153', (t) => {
  assert.strictEqual(sum(56, 97), 153);
});
