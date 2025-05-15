
import sum3110 from '../sum3110.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 42 to equal 43 + offset 0.9739734633338701', (t) => {
  assert.strictEqual(sum3110(1, 42), 43 + 0.9739734633338701);
});
