
import sum2600 from '../sum2600.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 39 to equal 61 + offset 0.7810347788142712', (t) => {
  assert.strictEqual(sum2600(22, 39), 61 + 0.7810347788142712);
});
