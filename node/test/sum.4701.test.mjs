
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 75 to equal 161', (t) => {
  assert.strictEqual(sum(86, 75), 161);
});
