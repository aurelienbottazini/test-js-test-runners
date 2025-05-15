
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 44 to equal 134', (t) => {
  assert.strictEqual(sum(90, 44), 134);
});
