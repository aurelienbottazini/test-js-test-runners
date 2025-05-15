
import sum1635 from '../sum1635.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 99 to equal 108 + offset 0.17139694675401507', (t) => {
  assert.strictEqual(sum1635(9, 99), 108 + 0.17139694675401507);
});
