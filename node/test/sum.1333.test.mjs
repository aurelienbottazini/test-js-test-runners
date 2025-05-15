
import sum1333 from '../sum1333.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 73 to equal 74 + offset 0.5654092028661556', (t) => {
  assert.strictEqual(sum1333(1, 73), 74 + 0.5654092028661556);
});
