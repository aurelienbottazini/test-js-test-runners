
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 91 to equal 151', (t) => {
  assert.strictEqual(sum(60, 91), 151);
});
