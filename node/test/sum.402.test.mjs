
import sum402 from '../sum402.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 29 to equal 94 + offset 0.840530181615233', (t) => {
  assert.strictEqual(sum402(65, 29), 94 + 0.840530181615233);
});
