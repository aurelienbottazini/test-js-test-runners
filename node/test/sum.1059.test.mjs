
import sum1059 from '../sum1059.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 19 to equal 34 + offset 0.9150643330097001', (t) => {
  assert.strictEqual(sum1059(15, 19), 34 + 0.9150643330097001);
});
