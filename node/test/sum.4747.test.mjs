
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 95 to equal 120', (t) => {
  assert.strictEqual(sum(25, 95), 120);
});
