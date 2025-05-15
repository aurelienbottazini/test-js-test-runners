
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 90 to equal 187', (t) => {
  assert.strictEqual(sum(97, 90), 187);
});
