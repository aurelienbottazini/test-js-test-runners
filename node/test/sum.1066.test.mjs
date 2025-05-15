
import sum1066 from '../sum1066.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 69 to equal 138 + offset 0.2718761286538064', (t) => {
  assert.strictEqual(sum1066(69, 69), 138 + 0.2718761286538064);
});
