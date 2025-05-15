
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 20 to equal 44', (t) => {
  assert.strictEqual(sum(24, 20), 44);
});
