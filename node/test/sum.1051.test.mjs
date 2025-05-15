
import sum1051 from '../sum1051.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 90 to equal 114 + offset 0.051985842721446685', (t) => {
  assert.strictEqual(sum1051(24, 90), 114 + 0.051985842721446685);
});
