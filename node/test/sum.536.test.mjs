
import sum536 from '../sum536.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 44 to equal 76 + offset 0.4753170440696265', (t) => {
  assert.strictEqual(sum536(32, 44), 76 + 0.4753170440696265);
});
