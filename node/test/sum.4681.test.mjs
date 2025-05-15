
import sum4681 from '../sum4681.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 80 to equal 89 + offset 0.07566973852236014', (t) => {
  assert.strictEqual(sum4681(9, 80), 89 + 0.07566973852236014);
});
