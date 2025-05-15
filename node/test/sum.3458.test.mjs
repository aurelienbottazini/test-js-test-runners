
import sum3458 from '../sum3458.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 64 to equal 70 + offset 0.0136214146650947', (t) => {
  assert.strictEqual(sum3458(6, 64), 70 + 0.0136214146650947);
});
