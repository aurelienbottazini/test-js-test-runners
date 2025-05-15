
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 3 to equal 27', (t) => {
  assert.strictEqual(sum(24, 3), 27);
});
