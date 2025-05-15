
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 51 to equal 120', (t) => {
  assert.strictEqual(sum(69, 51), 120);
});
