
import sum2865 from '../sum2865.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 80 to equal 120 + offset 0.10445818299843146', (t) => {
  assert.strictEqual(sum2865(40, 80), 120 + 0.10445818299843146);
});
