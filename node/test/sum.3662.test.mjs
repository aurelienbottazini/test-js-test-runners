
import sum3662 from '../sum3662.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 2 to equal 84 + offset 0.9113412193578436', (t) => {
  assert.strictEqual(sum3662(82, 2), 84 + 0.9113412193578436);
});
