
import sum209 from '../sum209.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 37 to equal 100 + offset 0.7495581501185097', (t) => {
  assert.strictEqual(sum209(63, 37), 100 + 0.7495581501185097);
});
