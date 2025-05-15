
import sum1369 from '../sum1369.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 61 to equal 84 + offset 0.7227811941087421', (t) => {
  assert.strictEqual(sum1369(23, 61), 84 + 0.7227811941087421);
});
