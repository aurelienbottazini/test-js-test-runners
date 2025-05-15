
import sum4885 from '../sum4885.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 75 to equal 115 + offset 0.22282071265146786', (t) => {
  assert.strictEqual(sum4885(40, 75), 115 + 0.22282071265146786);
});
