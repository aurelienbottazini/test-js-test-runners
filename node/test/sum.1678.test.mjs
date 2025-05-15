
import sum1678 from '../sum1678.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 57 to equal 155 + offset 0.11413162329070592', (t) => {
  assert.strictEqual(sum1678(98, 57), 155 + 0.11413162329070592);
});
