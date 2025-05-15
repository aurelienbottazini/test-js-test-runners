
import sum3642 from '../sum3642.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 74 to equal 90 + offset 0.09560591557039311', (t) => {
  assert.strictEqual(sum3642(16, 74), 90 + 0.09560591557039311);
});
