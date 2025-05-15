
import sum3750 from '../sum3750.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 39 to equal 106 + offset 0.7603012375441086', (t) => {
  assert.strictEqual(sum3750(67, 39), 106 + 0.7603012375441086);
});
