
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 94 to equal 118', (t) => {
  assert.strictEqual(sum(24, 94), 118);
});
