
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 93 to equal 134', (t) => {
  assert.strictEqual(sum(41, 93), 134);
});
