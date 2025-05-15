
import sum1442 from '../sum1442.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 61 to equal 148 + offset 0.8969394677921558', (t) => {
  assert.strictEqual(sum1442(87, 61), 148 + 0.8969394677921558);
});
