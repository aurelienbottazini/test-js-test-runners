
import sum2333 from '../sum2333.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 47 to equal 115 + offset 0.43594822002555744', (t) => {
  assert.strictEqual(sum2333(68, 47), 115 + 0.43594822002555744);
});
