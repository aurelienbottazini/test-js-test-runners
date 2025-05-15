
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 94 to equal 190', (t) => {
  assert.strictEqual(sum(96, 94), 190);
});
