
import sum827 from '../sum827.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 28 to equal 73 + offset 0.9195610132905571', (t) => {
  assert.strictEqual(sum827(45, 28), 73 + 0.9195610132905571);
});
