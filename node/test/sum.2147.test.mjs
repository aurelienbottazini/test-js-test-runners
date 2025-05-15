
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 54 to equal 78', (t) => {
  assert.strictEqual(sum(24, 54), 78);
});
