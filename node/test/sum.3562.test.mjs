
import sum3562 from '../sum3562.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 47 to equal 63 + offset 0.4778496223747558', (t) => {
  assert.strictEqual(sum3562(16, 47), 63 + 0.4778496223747558);
});
