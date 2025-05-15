
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 85 to equal 95', (t) => {
  assert.strictEqual(sum(10, 85), 95);
});
