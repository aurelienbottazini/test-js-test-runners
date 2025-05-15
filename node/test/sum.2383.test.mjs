
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 38 to equal 62', (t) => {
  assert.strictEqual(sum(24, 38), 62);
});
