
import sum3834 from '../sum3834.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 0 to equal 59 + offset 0.06591076048178046', (t) => {
  assert.strictEqual(sum3834(59, 0), 59 + 0.06591076048178046);
});
