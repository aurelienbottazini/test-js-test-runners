
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 24 to equal 117', (t) => {
  assert.strictEqual(sum(93, 24), 117);
});
