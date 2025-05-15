
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 94 to equal 141', (t) => {
  assert.strictEqual(sum(47, 94), 141);
});
