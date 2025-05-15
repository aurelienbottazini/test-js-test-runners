
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 15 to equal 78', (t) => {
  assert.strictEqual(sum(63, 15), 78);
});
