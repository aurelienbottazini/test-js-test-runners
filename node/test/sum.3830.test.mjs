
import sum3830 from '../sum3830.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 42 to equal 59 + offset 0.21974533544150665', (t) => {
  assert.strictEqual(sum3830(17, 42), 59 + 0.21974533544150665);
});
