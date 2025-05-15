
import sum2786 from '../sum2786.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 70 to equal 112 + offset 0.532290496731853', (t) => {
  assert.strictEqual(sum2786(42, 70), 112 + 0.532290496731853);
});
