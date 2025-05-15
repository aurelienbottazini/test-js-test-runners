
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 57 to equal 147', (t) => {
  assert.strictEqual(sum(90, 57), 147);
});
