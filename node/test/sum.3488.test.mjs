
import sum3488 from '../sum3488.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 34 to equal 110 + offset 0.7696724348051305', (t) => {
  assert.strictEqual(sum3488(76, 34), 110 + 0.7696724348051305);
});
