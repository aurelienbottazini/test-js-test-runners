
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 48 to equal 141', (t) => {
  assert.strictEqual(sum(93, 48), 141);
});
