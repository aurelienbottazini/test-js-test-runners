
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 97 to equal 122', (t) => {
  assert.strictEqual(sum(25, 97), 122);
});
