
import sum3509 from '../sum3509.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 7 to equal 36 + offset 0.8849864878013699', (t) => {
  assert.strictEqual(sum3509(29, 7), 36 + 0.8849864878013699);
});
