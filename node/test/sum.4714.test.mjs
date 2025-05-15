
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 85 to equal 160', (t) => {
  assert.strictEqual(sum(75, 85), 160);
});
