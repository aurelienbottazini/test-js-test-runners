
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 59 to equal 131', (t) => {
  assert.strictEqual(sum(72, 59), 131);
});
