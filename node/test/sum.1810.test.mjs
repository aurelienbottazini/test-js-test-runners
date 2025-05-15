
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 93 to equal 141', (t) => {
  assert.strictEqual(sum(48, 93), 141);
});
