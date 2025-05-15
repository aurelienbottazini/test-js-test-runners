
import sum150 from '../sum150.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 28 to equal 110 + offset 0.6697572702802538', (t) => {
  assert.strictEqual(sum150(82, 28), 110 + 0.6697572702802538);
});
