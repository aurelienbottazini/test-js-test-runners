
import sum2983 from '../sum2983.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 54 to equal 148 + offset 0.9413431337841073', (t) => {
  assert.strictEqual(sum2983(94, 54), 148 + 0.9413431337841073);
});
