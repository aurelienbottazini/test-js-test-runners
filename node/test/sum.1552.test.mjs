
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 76 to equal 151', (t) => {
  assert.strictEqual(sum(75, 76), 151);
});
