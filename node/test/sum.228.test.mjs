
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 47 to equal 144', (t) => {
  assert.strictEqual(sum(97, 47), 144);
});
