
import sum1184 from '../sum1184.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 3 to equal 102 + offset 0.7179749316107279', (t) => {
  assert.strictEqual(sum1184(99, 3), 102 + 0.7179749316107279);
});
