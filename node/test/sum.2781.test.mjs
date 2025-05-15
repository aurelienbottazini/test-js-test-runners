
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 22 to equal 82', (t) => {
  assert.strictEqual(sum(60, 22), 82);
});
