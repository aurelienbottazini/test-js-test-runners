
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 48 to equal 61', (t) => {
  assert.strictEqual(sum(13, 48), 61);
});
