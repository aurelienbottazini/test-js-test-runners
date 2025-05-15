
import sum1802 from '../sum1802.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 59 to equal 150 + offset 0.0525891112158533', (t) => {
  assert.strictEqual(sum1802(91, 59), 150 + 0.0525891112158533);
});
