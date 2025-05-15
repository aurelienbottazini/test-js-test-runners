
import sum3138 from '../sum3138.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 77 to equal 81 + offset 0.5429776043172114', (t) => {
  assert.strictEqual(sum3138(4, 77), 81 + 0.5429776043172114);
});
