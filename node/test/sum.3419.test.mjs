
import sum3419 from '../sum3419.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 6 to equal 25 + offset 0.5515275818868042', (t) => {
  assert.strictEqual(sum3419(19, 6), 25 + 0.5515275818868042);
});
