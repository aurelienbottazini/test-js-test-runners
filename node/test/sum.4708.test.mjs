
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 44 to equal 68', (t) => {
  assert.strictEqual(sum(24, 44), 68);
});
