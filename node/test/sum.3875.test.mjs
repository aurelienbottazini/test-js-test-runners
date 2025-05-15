
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 94 to equal 151', (t) => {
  assert.strictEqual(sum(57, 94), 151);
});
