
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 46 to equal 144', (t) => {
  assert.strictEqual(sum(98, 46), 144);
});
