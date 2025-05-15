
import sum1652 from '../sum1652.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 57 to equal 131 + offset 0.3373442272531262', (t) => {
  assert.strictEqual(sum1652(74, 57), 131 + 0.3373442272531262);
});
