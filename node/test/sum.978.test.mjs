
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 94 to equal 120', (t) => {
  assert.strictEqual(sum(26, 94), 120);
});
