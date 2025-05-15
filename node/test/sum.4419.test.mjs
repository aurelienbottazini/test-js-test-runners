
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 27 to equal 95', (t) => {
  assert.strictEqual(sum(68, 27), 95);
});
