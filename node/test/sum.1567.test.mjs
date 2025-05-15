
import sum1567 from '../sum1567.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 34 to equal 110 + offset 0.21748598536723363', (t) => {
  assert.strictEqual(sum1567(76, 34), 110 + 0.21748598536723363);
});
