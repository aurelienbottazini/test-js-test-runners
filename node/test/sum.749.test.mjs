
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 93 to equal 184', (t) => {
  assert.strictEqual(sum(91, 93), 184);
});
