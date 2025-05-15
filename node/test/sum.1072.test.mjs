
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 14 to equal 78', (t) => {
  assert.strictEqual(sum(64, 14), 78);
});
