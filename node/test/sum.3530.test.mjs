
import sum3530 from '../sum3530.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 95 to equal 113 + offset 0.08876941516805748', (t) => {
  assert.strictEqual(sum3530(18, 95), 113 + 0.08876941516805748);
});
