
import sum1668 from '../sum1668.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 77 to equal 132 + offset 0.6084246421564399', (t) => {
  assert.strictEqual(sum1668(55, 77), 132 + 0.6084246421564399);
});
