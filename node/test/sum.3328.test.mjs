
import sum3328 from '../sum3328.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 12 to equal 86 + offset 0.505892411326912', (t) => {
  assert.strictEqual(sum3328(74, 12), 86 + 0.505892411326912);
});
