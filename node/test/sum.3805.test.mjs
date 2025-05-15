
import sum3805 from '../sum3805.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 74 to equal 117 + offset 0.8685993023242954', (t) => {
  assert.strictEqual(sum3805(43, 74), 117 + 0.8685993023242954);
});
