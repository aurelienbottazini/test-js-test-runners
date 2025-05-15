
import sum4336 from '../sum4336.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 30 to equal 87 + offset 0.6780833529344246', (t) => {
  assert.strictEqual(sum4336(57, 30), 87 + 0.6780833529344246);
});
