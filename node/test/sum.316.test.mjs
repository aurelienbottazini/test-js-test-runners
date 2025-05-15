
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 85 to equal 163', (t) => {
  assert.strictEqual(sum(78, 85), 163);
});
