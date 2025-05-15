
import sum3046 from '../sum3046.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 42 to equal 83 + offset 0.5227364903054258', (t) => {
  assert.strictEqual(sum3046(41, 42), 83 + 0.5227364903054258);
});
