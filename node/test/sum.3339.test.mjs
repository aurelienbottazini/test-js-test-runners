
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 22 to equal 120', (t) => {
  assert.strictEqual(sum(98, 22), 120);
});
