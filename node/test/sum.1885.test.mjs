
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 14 to equal 62', (t) => {
  assert.strictEqual(sum(48, 14), 62);
});
