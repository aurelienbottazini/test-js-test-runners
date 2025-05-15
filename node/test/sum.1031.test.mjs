
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 20 to equal 92', (t) => {
  assert.strictEqual(sum(72, 20), 92);
});
