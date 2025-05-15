
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 91 to equal 141', (t) => {
  assert.strictEqual(sum(50, 91), 141);
});
