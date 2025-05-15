
import sum4124 from '../sum4124.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 81 to equal 155 + offset 0.24698082319525694', (t) => {
  assert.strictEqual(sum4124(74, 81), 155 + 0.24698082319525694);
});
