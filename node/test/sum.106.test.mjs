
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 75 to equal 151', (t) => {
  assert.strictEqual(sum(76, 75), 151);
});
