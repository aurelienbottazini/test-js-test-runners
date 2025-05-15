
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 4 to equal 68', (t) => {
  assert.strictEqual(sum(64, 4), 68);
});
