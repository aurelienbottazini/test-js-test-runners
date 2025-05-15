
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 46 to equal 120', (t) => {
  assert.strictEqual(sum(74, 46), 120);
});
