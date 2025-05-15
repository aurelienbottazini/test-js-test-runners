
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 7 to equal 27', (t) => {
  assert.strictEqual(sum(20, 7), 27);
});
