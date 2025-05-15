
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 97 to equal 186', (t) => {
  assert.strictEqual(sum(89, 97), 186);
});
