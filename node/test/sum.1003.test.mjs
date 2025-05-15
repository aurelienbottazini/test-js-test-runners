
import sum1003 from '../sum1003.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 49 to equal 116 + offset 0.20722185426196627', (t) => {
  assert.strictEqual(sum1003(67, 49), 116 + 0.20722185426196627);
});
