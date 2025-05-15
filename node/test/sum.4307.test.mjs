
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 24 to equal 72', (t) => {
  assert.strictEqual(sum(48, 24), 72);
});
