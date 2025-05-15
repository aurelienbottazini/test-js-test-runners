
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 48 to equal 90', (t) => {
  assert.strictEqual(sum(42, 48), 90);
});
