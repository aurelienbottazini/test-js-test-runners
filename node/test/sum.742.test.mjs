
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 50 to equal 130', (t) => {
  assert.strictEqual(sum(80, 50), 130);
});
