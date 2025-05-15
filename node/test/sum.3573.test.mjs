
import sum3573 from '../sum3573.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 8 to equal 46 + offset 0.3452773308651047', (t) => {
  assert.strictEqual(sum3573(38, 8), 46 + 0.3452773308651047);
});
