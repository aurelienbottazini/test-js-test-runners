
import sum4064 from '../sum4064.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 55 to equal 72 + offset 0.24721105110773467', (t) => {
  assert.strictEqual(sum4064(17, 55), 72 + 0.24721105110773467);
});
