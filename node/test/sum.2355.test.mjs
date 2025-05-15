
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 48 to equal 72', (t) => {
  assert.strictEqual(sum(24, 48), 72);
});
