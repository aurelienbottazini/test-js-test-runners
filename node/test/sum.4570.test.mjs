
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 69 to equal 95', (t) => {
  assert.strictEqual(sum(26, 69), 95);
});
