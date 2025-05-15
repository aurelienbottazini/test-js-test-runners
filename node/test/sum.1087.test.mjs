
import sum1087 from '../sum1087.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 85 to equal 179 + offset 0.7496375537581317', (t) => {
  assert.strictEqual(sum1087(94, 85), 179 + 0.7496375537581317);
});
