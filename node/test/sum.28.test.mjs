
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 99 to equal 151', (t) => {
  assert.strictEqual(sum(52, 99), 151);
});
