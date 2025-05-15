
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 7 to equal 67', (t) => {
  assert.strictEqual(sum(60, 7), 67);
});
