
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 48 to equal 85', (t) => {
  assert.strictEqual(sum(37, 48), 85);
});
