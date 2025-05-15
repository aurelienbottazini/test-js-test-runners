
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 95 to equal 186', (t) => {
  assert.strictEqual(sum(91, 95), 186);
});
