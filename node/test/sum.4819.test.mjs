
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 61 to equal 151', (t) => {
  assert.strictEqual(sum(90, 61), 151);
});
