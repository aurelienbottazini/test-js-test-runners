
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 53 to equal 140', (t) => {
  assert.strictEqual(sum(87, 53), 140);
});
