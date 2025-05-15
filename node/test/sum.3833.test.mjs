
import sum3833 from '../sum3833.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 10 to equal 63 + offset 0.2853654453418578', (t) => {
  assert.strictEqual(sum3833(53, 10), 63 + 0.2853654453418578);
});
