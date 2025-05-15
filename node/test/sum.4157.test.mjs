
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 48 to equal 60', (t) => {
  assert.strictEqual(sum(12, 48), 60);
});
