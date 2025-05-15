
import sum1068 from '../sum1068.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 7 to equal 25 + offset 0.8339456216704182', (t) => {
  assert.strictEqual(sum1068(18, 7), 25 + 0.8339456216704182);
});
