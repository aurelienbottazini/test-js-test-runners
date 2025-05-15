
import sum3668 from '../sum3668.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 32 to equal 107 + offset 0.9378254871342188', (t) => {
  assert.strictEqual(sum3668(75, 32), 107 + 0.9378254871342188);
});
