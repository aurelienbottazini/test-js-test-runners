
import sum2053 from '../sum2053.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 99 to equal 194 + offset 0.9508007934325422', (t) => {
  assert.strictEqual(sum2053(95, 99), 194 + 0.9508007934325422);
});
