
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 46 to equal 78', (t) => {
  assert.strictEqual(sum(32, 46), 78);
});
