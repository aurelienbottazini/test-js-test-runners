
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 35 to equal 35', (t) => {
  assert.strictEqual(sum(0, 35), 35);
});
