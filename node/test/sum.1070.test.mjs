
import sum1070 from '../sum1070.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 45 to equal 130 + offset 0.22359413713768572', (t) => {
  assert.strictEqual(sum1070(85, 45), 130 + 0.22359413713768572);
});
