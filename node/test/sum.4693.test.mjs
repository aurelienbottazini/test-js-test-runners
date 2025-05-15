
import sum4693 from '../sum4693.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 61 to equal 71 + offset 0.1054471271500157', (t) => {
  assert.strictEqual(sum4693(10, 61), 71 + 0.1054471271500157);
});
