
import sum2152 from '../sum2152.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 95 to equal 102 + offset 0.702196279422292', (t) => {
  assert.strictEqual(sum2152(7, 95), 102 + 0.702196279422292);
});
