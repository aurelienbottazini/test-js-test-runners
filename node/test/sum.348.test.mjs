
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 69 to equal 130', (t) => {
  assert.strictEqual(sum(61, 69), 130);
});
