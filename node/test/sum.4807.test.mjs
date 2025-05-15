
import sum4807 from '../sum4807.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 66 to equal 116 + offset 0.3884756909209216', (t) => {
  assert.strictEqual(sum4807(50, 66), 116 + 0.3884756909209216);
});
