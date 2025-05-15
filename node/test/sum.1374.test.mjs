
import sum1374 from '../sum1374.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 50 to equal 118 + offset 0.7918029911539435', (t) => {
  assert.strictEqual(sum1374(68, 50), 118 + 0.7918029911539435);
});
