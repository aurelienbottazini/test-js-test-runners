
import sum2291 from '../sum2291.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 24 to equal 84 + offset 0.7971861855805916', (t) => {
  assert.strictEqual(sum2291(60, 24), 84 + 0.7971861855805916);
});
