
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 88 to equal 177', (t) => {
  assert.strictEqual(sum(89, 88), 177);
});
