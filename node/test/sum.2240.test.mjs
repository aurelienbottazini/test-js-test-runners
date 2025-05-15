
import sum2240 from '../sum2240.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 77 to equal 87 + offset 0.21426819769454652', (t) => {
  assert.strictEqual(sum2240(10, 77), 87 + 0.21426819769454652);
});
