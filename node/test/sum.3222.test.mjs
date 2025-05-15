
import sum3222 from '../sum3222.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 36 to equal 50 + offset 0.6203322290060916', (t) => {
  assert.strictEqual(sum3222(14, 36), 50 + 0.6203322290060916);
});
