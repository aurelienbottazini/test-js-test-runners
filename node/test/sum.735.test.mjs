
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 85 to equal 176', (t) => {
  assert.strictEqual(sum(91, 85), 176);
});
