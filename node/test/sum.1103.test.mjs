
import sum1103 from '../sum1103.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 22 to equal 65 + offset 0.8554406832043712', (t) => {
  assert.strictEqual(sum1103(43, 22), 65 + 0.8554406832043712);
});
