
import sum1991 from '../sum1991.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 17 to equal 80 + offset 0.962231693042868', (t) => {
  assert.strictEqual(sum1991(63, 17), 80 + 0.962231693042868);
});
