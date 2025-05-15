
import sum2251 from '../sum2251.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 90 to equal 174 + offset 0.009317307182669543', (t) => {
  assert.strictEqual(sum2251(84, 90), 174 + 0.009317307182669543);
});
