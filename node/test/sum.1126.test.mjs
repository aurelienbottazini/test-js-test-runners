
import sum1126 from '../sum1126.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 89 to equal 101 + offset 0.9042017599915149', (t) => {
  assert.strictEqual(sum1126(12, 89), 101 + 0.9042017599915149);
});
