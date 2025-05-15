
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 30 to equal 115', (t) => {
  assert.strictEqual(sum(85, 30), 115);
});
