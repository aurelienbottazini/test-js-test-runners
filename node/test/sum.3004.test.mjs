
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 7 to equal 25', (t) => {
  assert.strictEqual(sum(18, 7), 25);
});
