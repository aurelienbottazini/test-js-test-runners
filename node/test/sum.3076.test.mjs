
import sum3076 from '../sum3076.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 48 to equal 55 + offset 0.20011035829733348', (t) => {
  assert.strictEqual(sum3076(7, 48), 55 + 0.20011035829733348);
});
