
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 35 to equal 95', (t) => {
  assert.strictEqual(sum(60, 35), 95);
});
