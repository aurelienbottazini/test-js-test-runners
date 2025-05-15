
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 91 to equal 187', (t) => {
  assert.strictEqual(sum(96, 91), 187);
});
