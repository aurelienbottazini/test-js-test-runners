
import sum4425 from '../sum4425.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 26 to equal 42 + offset 0.19092242372810952', (t) => {
  assert.strictEqual(sum4425(16, 26), 42 + 0.19092242372810952);
});
