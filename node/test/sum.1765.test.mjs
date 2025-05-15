
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 97 to equal 151', (t) => {
  assert.strictEqual(sum(54, 97), 151);
});
