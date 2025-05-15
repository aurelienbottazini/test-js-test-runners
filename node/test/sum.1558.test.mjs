
import sum1558 from '../sum1558.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 8 to equal 44 + offset 0.03543499277578688', (t) => {
  assert.strictEqual(sum1558(36, 8), 44 + 0.03543499277578688);
});
