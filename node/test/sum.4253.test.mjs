
import sum4253 from '../sum4253.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 3 to equal 48 + offset 0.21412554985614263', (t) => {
  assert.strictEqual(sum4253(45, 3), 48 + 0.21412554985614263);
});
