
import sum2759 from '../sum2759.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 20 to equal 28 + offset 0.8101257004374272', (t) => {
  assert.strictEqual(sum2759(8, 20), 28 + 0.8101257004374272);
});
