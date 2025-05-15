
import sum2511 from '../sum2511.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 17 to equal 61 + offset 0.7078267245126004', (t) => {
  assert.strictEqual(sum2511(44, 17), 61 + 0.7078267245126004);
});
