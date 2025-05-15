
import sum1491 from '../sum1491.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 51 to equal 139 + offset 0.4821691630975118', (t) => {
  assert.strictEqual(sum1491(88, 51), 139 + 0.4821691630975118);
});
