
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 85 to equal 114', (t) => {
  assert.strictEqual(sum(29, 85), 114);
});
