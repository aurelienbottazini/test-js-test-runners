
import sum4355 from '../sum4355.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 94 to equal 148 + offset 0.700080487936669', (t) => {
  assert.strictEqual(sum4355(54, 94), 148 + 0.700080487936669);
});
