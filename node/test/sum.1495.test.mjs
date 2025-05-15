
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 51 to equal 135', (t) => {
  assert.strictEqual(sum(84, 51), 135);
});
