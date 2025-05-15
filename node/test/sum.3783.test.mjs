
import sum3783 from '../sum3783.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 35 to equal 86 + offset 0.37800106035532355', (t) => {
  assert.strictEqual(sum3783(51, 35), 86 + 0.37800106035532355);
});
