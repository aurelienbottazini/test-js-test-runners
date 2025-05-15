
import sum3091 from '../sum3091.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 74 to equal 108 + offset 0.8574788852686043', (t) => {
  assert.strictEqual(sum3091(34, 74), 108 + 0.8574788852686043);
});
