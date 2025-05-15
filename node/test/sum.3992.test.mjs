
import sum3992 from '../sum3992.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 35 to equal 70 + offset 0.8628666242462057', (t) => {
  assert.strictEqual(sum3992(35, 35), 70 + 0.8628666242462057);
});
