
import sum3787 from '../sum3787.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 10 to equal 22 + offset 0.9594432046895496', (t) => {
  assert.strictEqual(sum3787(12, 10), 22 + 0.9594432046895496);
});
