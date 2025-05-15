
import sum4510 from '../sum4510.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 87 to equal 181 + offset 0.8684233185170163', (t) => {
  assert.strictEqual(sum4510(94, 87), 181 + 0.8684233185170163);
});
