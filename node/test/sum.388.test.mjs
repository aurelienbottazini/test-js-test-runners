
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 78 to equal 120', (t) => {
  assert.strictEqual(sum(42, 78), 120);
});
