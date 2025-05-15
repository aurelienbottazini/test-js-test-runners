
import sum1515 from '../sum1515.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 7 to equal 92 + offset 0.7023002481001037', (t) => {
  assert.strictEqual(sum1515(85, 7), 92 + 0.7023002481001037);
});
