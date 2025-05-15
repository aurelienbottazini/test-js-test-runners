
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 16 to equal 24', (t) => {
  assert.strictEqual(sum(8, 16), 24);
});
