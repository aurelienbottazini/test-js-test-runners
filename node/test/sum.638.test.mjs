
import sum638 from '../sum638.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 53 to equal 69 + offset 0.39617440375890234', (t) => {
  assert.strictEqual(sum638(16, 53), 69 + 0.39617440375890234);
});
