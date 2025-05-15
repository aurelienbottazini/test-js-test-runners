
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 85 to equal 151', (t) => {
  assert.strictEqual(sum(66, 85), 151);
});
