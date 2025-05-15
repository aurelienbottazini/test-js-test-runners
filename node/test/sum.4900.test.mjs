
import sum4900 from '../sum4900.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 22 to equal 121 + offset 0.3827483239452243', (t) => {
  assert.strictEqual(sum4900(99, 22), 121 + 0.3827483239452243);
});
