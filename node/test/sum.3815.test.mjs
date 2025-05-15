
import sum3815 from '../sum3815.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 64 to equal 151 + offset 0.25791740731956914', (t) => {
  assert.strictEqual(sum3815(87, 64), 151 + 0.25791740731956914);
});
