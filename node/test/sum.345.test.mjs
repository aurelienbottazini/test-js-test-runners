
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 54 to equal 90', (t) => {
  assert.strictEqual(sum(36, 54), 90);
});
