
import sum2169 from '../sum2169.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 70 to equal 104 + offset 0.28070290663099473', (t) => {
  assert.strictEqual(sum2169(34, 70), 104 + 0.28070290663099473);
});
