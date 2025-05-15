
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 19 to equal 45', (t) => {
  assert.strictEqual(sum(26, 19), 45);
});
