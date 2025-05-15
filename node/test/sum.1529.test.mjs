
import sum1529 from '../sum1529.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 6 to equal 101 + offset 0.04051267671842074', (t) => {
  assert.strictEqual(sum1529(95, 6), 101 + 0.04051267671842074);
});
