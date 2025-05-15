
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 85 to equal 110', (t) => {
  assert.strictEqual(sum(25, 85), 110);
});
