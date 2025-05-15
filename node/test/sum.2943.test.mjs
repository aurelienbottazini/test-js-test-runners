
import sum2943 from '../sum2943.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 54 to equal 99 + offset 0.8232189626435606', (t) => {
  assert.strictEqual(sum2943(45, 54), 99 + 0.8232189626435606);
});
