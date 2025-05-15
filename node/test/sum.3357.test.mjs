
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 60 to equal 108', (t) => {
  assert.strictEqual(sum(48, 60), 108);
});
