
import sum3765 from '../sum3765.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 83 to equal 170 + offset 0.5650000158599251', (t) => {
  assert.strictEqual(sum3765(87, 83), 170 + 0.5650000158599251);
});
