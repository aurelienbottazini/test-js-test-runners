
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 91 to equal 144', (t) => {
  assert.strictEqual(sum(53, 91), 144);
});
