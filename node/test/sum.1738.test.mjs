
import sum1738 from '../sum1738.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 90 to equal 177 + offset 0.28913298816756283', (t) => {
  assert.strictEqual(sum1738(87, 90), 177 + 0.28913298816756283);
});
