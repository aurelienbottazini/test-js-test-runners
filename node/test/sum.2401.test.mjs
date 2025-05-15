
import sum2401 from '../sum2401.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 33 to equal 51 + offset 0.31095578303116356', (t) => {
  assert.strictEqual(sum2401(18, 33), 51 + 0.31095578303116356);
});
