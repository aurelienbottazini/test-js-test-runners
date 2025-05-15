
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 84 to equal 174', (t) => {
  assert.strictEqual(sum(90, 84), 174);
});
