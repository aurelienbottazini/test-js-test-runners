
import sum2163 from '../sum2163.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 3 to equal 59 + offset 0.02087956821554693', (t) => {
  assert.strictEqual(sum2163(56, 3), 59 + 0.02087956821554693);
});
