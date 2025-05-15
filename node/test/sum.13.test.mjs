
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 62 to equal 130', (t) => {
  assert.strictEqual(sum(68, 62), 130);
});
