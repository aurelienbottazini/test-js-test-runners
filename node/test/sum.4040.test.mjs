
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 60 to equal 134', (t) => {
  assert.strictEqual(sum(74, 60), 134);
});
