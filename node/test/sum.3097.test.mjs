
import sum3097 from '../sum3097.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 35 to equal 58 + offset 0.6899641564129847', (t) => {
  assert.strictEqual(sum3097(23, 35), 58 + 0.6899641564129847);
});
