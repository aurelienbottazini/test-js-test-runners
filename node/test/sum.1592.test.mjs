
import sum1592 from '../sum1592.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 26 to equal 32 + offset 0.6989837766404581', (t) => {
  assert.strictEqual(sum1592(6, 26), 32 + 0.6989837766404581);
});
