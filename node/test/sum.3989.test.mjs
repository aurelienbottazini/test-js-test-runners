
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 55 to equal 62', (t) => {
  assert.strictEqual(sum(7, 55), 62);
});
