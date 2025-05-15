
import sum3877 from '../sum3877.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 18 to equal 57 + offset 0.5630179474583403', (t) => {
  assert.strictEqual(sum3877(39, 18), 57 + 0.5630179474583403);
});
