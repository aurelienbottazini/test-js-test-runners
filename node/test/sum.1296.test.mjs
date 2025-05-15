
import sum1296 from '../sum1296.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 22 to equal 106 + offset 0.4969320975708701', (t) => {
  assert.strictEqual(sum1296(84, 22), 106 + 0.4969320975708701);
});
