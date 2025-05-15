
import sum3417 from '../sum3417.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 17 to equal 18 + offset 0.786560520553021', (t) => {
  assert.strictEqual(sum3417(1, 17), 18 + 0.786560520553021);
});
