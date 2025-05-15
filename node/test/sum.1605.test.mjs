
import sum1605 from '../sum1605.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 16 to equal 108 + offset 0.3830962371739539', (t) => {
  assert.strictEqual(sum1605(92, 16), 108 + 0.3830962371739539);
});
