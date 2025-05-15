
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 55 to equal 120', (t) => {
  assert.strictEqual(sum(65, 55), 120);
});
