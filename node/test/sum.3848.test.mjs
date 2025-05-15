
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 7 to equal 78', (t) => {
  assert.strictEqual(sum(71, 7), 78);
});
