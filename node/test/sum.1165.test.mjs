
import sum1165 from '../sum1165.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 99 to equal 121 + offset 0.19750904544186187', (t) => {
  assert.strictEqual(sum1165(22, 99), 121 + 0.19750904544186187);
});
