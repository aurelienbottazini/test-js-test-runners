
import sum3914 from '../sum3914.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 95 to equal 118 + offset 0.47569318911833725', (t) => {
  assert.strictEqual(sum3914(23, 95), 118 + 0.47569318911833725);
});
