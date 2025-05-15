
import sum430 from '../sum430.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 70 to equal 162 + offset 0.8063851101791994', (t) => {
  assert.strictEqual(sum430(92, 70), 162 + 0.8063851101791994);
});
