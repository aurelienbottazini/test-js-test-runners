
import sum3217 from '../sum3217.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 40 to equal 119 + offset 0.6807996096465494', (t) => {
  assert.strictEqual(sum3217(79, 40), 119 + 0.6807996096465494);
});
