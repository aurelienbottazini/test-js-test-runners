
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 47 to equal 95', (t) => {
  assert.strictEqual(sum(48, 47), 95);
});
