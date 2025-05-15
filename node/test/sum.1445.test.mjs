
import sum1445 from '../sum1445.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 87 to equal 105 + offset 0.9749982461460365', (t) => {
  assert.strictEqual(sum1445(18, 87), 105 + 0.9749982461460365);
});
