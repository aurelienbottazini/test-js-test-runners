
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 83 to equal 134', (t) => {
  assert.strictEqual(sum(51, 83), 134);
});
