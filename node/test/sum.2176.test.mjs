
import sum2176 from '../sum2176.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 31 to equal 42 + offset 0.2697742026979897', (t) => {
  assert.strictEqual(sum2176(11, 31), 42 + 0.2697742026979897);
});
