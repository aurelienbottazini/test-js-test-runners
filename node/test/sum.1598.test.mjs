
import sum1598 from '../sum1598.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 14 to equal 43 + offset 0.024688057239570016', (t) => {
  assert.strictEqual(sum1598(29, 14), 43 + 0.024688057239570016);
});
