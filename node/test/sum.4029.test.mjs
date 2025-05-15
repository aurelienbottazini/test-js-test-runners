
import sum4029 from '../sum4029.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 80 to equal 99 + offset 0.9622057720474618', (t) => {
  assert.strictEqual(sum4029(19, 80), 99 + 0.9622057720474618);
});
