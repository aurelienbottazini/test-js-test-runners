
import sum3886 from '../sum3886.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 56 to equal 91 + offset 0.046316952111024046', (t) => {
  assert.strictEqual(sum3886(35, 56), 91 + 0.046316952111024046);
});
