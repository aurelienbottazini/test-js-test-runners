
import sum2568 from '../sum2568.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 77 to equal 121 + offset 0.2005745802663217', (t) => {
  assert.strictEqual(sum2568(44, 77), 121 + 0.2005745802663217);
});
