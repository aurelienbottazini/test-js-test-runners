
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 24 to equal 60', (t) => {
  assert.strictEqual(sum(36, 24), 60);
});
