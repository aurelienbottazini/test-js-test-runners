
import sum4150 from '../sum4150.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 24 to equal 87 + offset 0.15793093542924141', (t) => {
  assert.strictEqual(sum4150(63, 24), 87 + 0.15793093542924141);
});
