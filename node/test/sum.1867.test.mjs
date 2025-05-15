
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 24 to equal 62', (t) => {
  assert.strictEqual(sum(38, 24), 62);
});
