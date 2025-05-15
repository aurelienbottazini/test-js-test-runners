
import sum3292 from '../sum3292.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 79 to equal 168 + offset 0.9980903640494985', (t) => {
  assert.strictEqual(sum3292(89, 79), 168 + 0.9980903640494985);
});
