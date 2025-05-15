
import sum2783 from '../sum2783.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 73 to equal 140 + offset 0.7041511095066255', (t) => {
  assert.strictEqual(sum2783(67, 73), 140 + 0.7041511095066255);
});
