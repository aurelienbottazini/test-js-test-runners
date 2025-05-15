
import sum3850 from '../sum3850.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 38 to equal 120 + offset 0.3352522702413798', (t) => {
  assert.strictEqual(sum3850(82, 38), 120 + 0.3352522702413798);
});
