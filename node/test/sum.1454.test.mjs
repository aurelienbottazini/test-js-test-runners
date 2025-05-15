
import sum1454 from '../sum1454.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 33 to equal 39 + offset 0.7892903758297151', (t) => {
  assert.strictEqual(sum1454(6, 33), 39 + 0.7892903758297151);
});
