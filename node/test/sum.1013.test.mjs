
import sum1013 from '../sum1013.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 24 to equal 74 + offset 0.5529641154476367', (t) => {
  assert.strictEqual(sum1013(50, 24), 74 + 0.5529641154476367);
});
