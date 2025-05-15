
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 60 to equal 147', (t) => {
  assert.strictEqual(sum(87, 60), 147);
});
