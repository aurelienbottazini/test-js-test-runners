
import sum3796 from '../sum3796.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 17 to equal 57 + offset 0.7665532304733027', (t) => {
  assert.strictEqual(sum3796(40, 17), 57 + 0.7665532304733027);
});
