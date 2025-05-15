
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 19 to equal 44', (t) => {
  assert.strictEqual(sum(25, 19), 44);
});
