
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 84 to equal 170', (t) => {
  assert.strictEqual(sum(86, 84), 170);
});
