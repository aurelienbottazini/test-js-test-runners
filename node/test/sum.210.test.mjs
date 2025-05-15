
import sum210 from '../sum210.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 59 to equal 95 + offset 0.8609869593376798', (t) => {
  assert.strictEqual(sum210(36, 59), 95 + 0.8609869593376798);
});
