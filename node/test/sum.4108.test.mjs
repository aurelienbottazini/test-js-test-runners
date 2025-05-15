
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 84 to equal 151', (t) => {
  assert.strictEqual(sum(67, 84), 151);
});
