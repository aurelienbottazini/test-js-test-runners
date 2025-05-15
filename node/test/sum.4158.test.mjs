
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 50 to equal 140', (t) => {
  assert.strictEqual(sum(90, 50), 140);
});
