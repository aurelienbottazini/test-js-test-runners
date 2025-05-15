
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 49 to equal 62', (t) => {
  assert.strictEqual(sum(13, 49), 62);
});
