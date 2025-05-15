
import sum1300 from '../sum1300.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 78 to equal 149 + offset 0.9119697323799839', (t) => {
  assert.strictEqual(sum1300(71, 78), 149 + 0.9119697323799839);
});
