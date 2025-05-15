
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 65 to equal 81', (t) => {
  assert.strictEqual(sum(16, 65), 81);
});
