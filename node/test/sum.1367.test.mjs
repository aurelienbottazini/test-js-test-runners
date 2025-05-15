
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 97 to equal 194', (t) => {
  assert.strictEqual(sum(97, 97), 194);
});
