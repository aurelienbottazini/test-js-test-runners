
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 85 to equal 121', (t) => {
  assert.strictEqual(sum(36, 85), 121);
});
