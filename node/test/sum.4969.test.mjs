
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 16 to equal 53', (t) => {
  assert.strictEqual(sum(37, 16), 53);
});
