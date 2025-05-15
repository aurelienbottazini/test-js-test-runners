
import sum2158 from '../sum2158.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 23 to equal 103 + offset 0.2894485870522282', (t) => {
  assert.strictEqual(sum2158(80, 23), 103 + 0.2894485870522282);
});
