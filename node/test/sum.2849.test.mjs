
import sum2849 from '../sum2849.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 76 to equal 110 + offset 0.004827571805234521', (t) => {
  assert.strictEqual(sum2849(34, 76), 110 + 0.004827571805234521);
});
