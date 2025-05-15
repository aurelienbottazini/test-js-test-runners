
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 97 to equal 187', (t) => {
  assert.strictEqual(sum(90, 97), 187);
});
