
import sum4283 from '../sum4283.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 94 to equal 128 + offset 0.9662446168863156', (t) => {
  assert.strictEqual(sum4283(34, 94), 128 + 0.9662446168863156);
});
