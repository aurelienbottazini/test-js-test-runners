
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 91 to equal 147', (t) => {
  assert.strictEqual(sum(56, 91), 147);
});
