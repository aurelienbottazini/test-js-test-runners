
import sum1895 from '../sum1895.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 35 to equal 111 + offset 0.2716202553161752', (t) => {
  assert.strictEqual(sum1895(76, 35), 111 + 0.2716202553161752);
});
