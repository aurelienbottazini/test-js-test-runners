
import sum3885 from '../sum3885.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 13 to equal 45 + offset 0.6861114352580232', (t) => {
  assert.strictEqual(sum3885(32, 13), 45 + 0.6861114352580232);
});
