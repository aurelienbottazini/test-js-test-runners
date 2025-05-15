
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 80 to equal 176', (t) => {
  assert.strictEqual(sum(96, 80), 176);
});
