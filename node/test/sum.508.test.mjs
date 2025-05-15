
import sum508 from '../sum508.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 64 to equal 163 + offset 0.3797360937317322', (t) => {
  assert.strictEqual(sum508(99, 64), 163 + 0.3797360937317322);
});
