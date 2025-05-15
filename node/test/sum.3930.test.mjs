
import sum3930 from '../sum3930.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 41 to equal 48 + offset 0.07106702624226224', (t) => {
  assert.strictEqual(sum3930(7, 41), 48 + 0.07106702624226224);
});
