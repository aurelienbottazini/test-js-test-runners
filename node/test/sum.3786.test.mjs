
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 60 to equal 72', (t) => {
  assert.strictEqual(sum(12, 60), 72);
});
