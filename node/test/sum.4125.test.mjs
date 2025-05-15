
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 85 to equal 99', (t) => {
  assert.strictEqual(sum(14, 85), 99);
});
