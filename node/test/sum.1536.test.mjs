
import sum1536 from '../sum1536.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 73 to equal 125 + offset 0.28752666086004175', (t) => {
  assert.strictEqual(sum1536(52, 73), 125 + 0.28752666086004175);
});
