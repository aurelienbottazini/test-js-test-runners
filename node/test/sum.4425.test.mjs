
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 91 to equal 161', (t) => {
  assert.strictEqual(sum(70, 91), 161);
});
