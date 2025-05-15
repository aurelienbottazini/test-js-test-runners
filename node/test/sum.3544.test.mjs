
import sum3544 from '../sum3544.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 88 to equal 138 + offset 0.45781792267467136', (t) => {
  assert.strictEqual(sum3544(50, 88), 138 + 0.45781792267467136);
});
