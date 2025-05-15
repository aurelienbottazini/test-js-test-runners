
import sum2563 from '../sum2563.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 2 to equal 59 + offset 0.05831737651921198', (t) => {
  assert.strictEqual(sum2563(57, 2), 59 + 0.05831737651921198);
});
