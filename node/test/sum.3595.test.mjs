
import sum3595 from '../sum3595.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 56 to equal 97 + offset 0.4257455572624006', (t) => {
  assert.strictEqual(sum3595(41, 56), 97 + 0.4257455572624006);
});
