
import sum4138 from '../sum4138.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 77 to equal 132 + offset 0.41551329247659385', (t) => {
  assert.strictEqual(sum4138(55, 77), 132 + 0.41551329247659385);
});
