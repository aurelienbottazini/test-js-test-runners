
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 85 to equal 170', (t) => {
  assert.strictEqual(sum(85, 85), 170);
});
