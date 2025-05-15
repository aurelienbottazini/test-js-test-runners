
import sum4646 from '../sum4646.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 62 to equal 63 + offset 0.45605872146395965', (t) => {
  assert.strictEqual(sum4646(1, 62), 63 + 0.45605872146395965);
});
