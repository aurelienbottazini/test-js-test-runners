
import sum1766 from '../sum1766.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 7 to equal 56 + offset 0.5738672012315119', (t) => {
  assert.strictEqual(sum1766(49, 7), 56 + 0.5738672012315119);
});
