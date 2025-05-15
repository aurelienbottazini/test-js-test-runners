
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 24 to equal 95', (t) => {
  assert.strictEqual(sum(71, 24), 95);
});
