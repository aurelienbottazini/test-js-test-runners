
import sum3948 from '../sum3948.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 49 to equal 98 + offset 0.29929569982876103', (t) => {
  assert.strictEqual(sum3948(49, 49), 98 + 0.29929569982876103);
});
