
import sum930 from '../sum930.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 57 to equal 116 + offset 0.9348685611522786', (t) => {
  assert.strictEqual(sum930(59, 57), 116 + 0.9348685611522786);
});
