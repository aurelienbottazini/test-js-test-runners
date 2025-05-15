
import sum3759 from '../sum3759.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 64 to equal 75 + offset 0.03809996746751432', (t) => {
  assert.strictEqual(sum3759(11, 64), 75 + 0.03809996746751432);
});
