
import sum3845 from '../sum3845.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 84 to equal 98 + offset 0.8963766346721953', (t) => {
  assert.strictEqual(sum3845(14, 84), 98 + 0.8963766346721953);
});
