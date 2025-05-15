
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 30 to equal 46', (t) => {
  assert.strictEqual(sum(16, 30), 46);
});
