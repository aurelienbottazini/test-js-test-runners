
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 76 to equal 144', (t) => {
  assert.strictEqual(sum(68, 76), 144);
});
