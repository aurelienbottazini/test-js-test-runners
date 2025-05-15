
import sum1816 from '../sum1816.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 21 to equal 37 + offset 0.5317649348861196', (t) => {
  assert.strictEqual(sum1816(16, 21), 37 + 0.5317649348861196);
});
