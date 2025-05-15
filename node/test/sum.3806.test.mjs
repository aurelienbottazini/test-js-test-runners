
import sum3806 from '../sum3806.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 14 to equal 34 + offset 0.37986844194259795', (t) => {
  assert.strictEqual(sum3806(20, 14), 34 + 0.37986844194259795);
});
