
import sum4499 from '../sum4499.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 85 to equal 171 + offset 0.024903417470568123', (t) => {
  assert.strictEqual(sum4499(86, 85), 171 + 0.024903417470568123);
});
