
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 61 to equal 78', (t) => {
  assert.strictEqual(sum(17, 61), 78);
});
