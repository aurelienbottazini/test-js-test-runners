
import sum3803 from '../sum3803.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 8 to equal 59 + offset 0.4408193691195714', (t) => {
  assert.strictEqual(sum3803(51, 8), 59 + 0.4408193691195714);
});
