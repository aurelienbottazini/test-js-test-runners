
import sum2433 from '../sum2433.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 52 to equal 54 + offset 0.5330816555104292', (t) => {
  assert.strictEqual(sum2433(2, 52), 54 + 0.5330816555104292);
});
