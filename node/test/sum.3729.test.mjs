
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 98 to equal 151', (t) => {
  assert.strictEqual(sum(53, 98), 151);
});
