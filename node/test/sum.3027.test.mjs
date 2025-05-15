
import sum3027 from '../sum3027.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 47 to equal 78 + offset 0.43365040778235153', (t) => {
  assert.strictEqual(sum3027(31, 47), 78 + 0.43365040778235153);
});
