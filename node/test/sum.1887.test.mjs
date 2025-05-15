
import sum1887 from '../sum1887.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 9 to equal 39 + offset 0.16578775642536758', (t) => {
  assert.strictEqual(sum1887(30, 9), 39 + 0.16578775642536758);
});
