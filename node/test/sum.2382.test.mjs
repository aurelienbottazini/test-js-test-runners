
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 87 to equal 151', (t) => {
  assert.strictEqual(sum(64, 87), 151);
});
