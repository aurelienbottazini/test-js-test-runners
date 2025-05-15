
import sum2485 from '../sum2485.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 96 to equal 141 + offset 0.47077762547607815', (t) => {
  assert.strictEqual(sum2485(45, 96), 141 + 0.47077762547607815);
});
