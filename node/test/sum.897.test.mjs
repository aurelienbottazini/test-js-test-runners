
import sum897 from '../sum897.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 88 to equal 170 + offset 0.025647306884511445', (t) => {
  assert.strictEqual(sum897(82, 88), 170 + 0.025647306884511445);
});
