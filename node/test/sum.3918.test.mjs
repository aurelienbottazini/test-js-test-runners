
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 94 to equal 142', (t) => {
  assert.strictEqual(sum(48, 94), 142);
});
