
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 84 to equal 109', (t) => {
  assert.strictEqual(sum(25, 84), 109);
});
