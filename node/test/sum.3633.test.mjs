
import sum3633 from '../sum3633.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 82 to equal 160 + offset 0.41583388977240876', (t) => {
  assert.strictEqual(sum3633(78, 82), 160 + 0.41583388977240876);
});
