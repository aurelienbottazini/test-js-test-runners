
import sum1607 from '../sum1607.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 60 to equal 98 + offset 0.21309719037698271', (t) => {
  assert.strictEqual(sum1607(38, 60), 98 + 0.21309719037698271);
});
