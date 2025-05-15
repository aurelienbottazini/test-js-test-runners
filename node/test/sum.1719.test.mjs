
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 45 to equal 140', (t) => {
  assert.strictEqual(sum(95, 45), 140);
});
