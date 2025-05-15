
import sum3590 from '../sum3590.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 32 to equal 41 + offset 0.26712859332171823', (t) => {
  assert.strictEqual(sum3590(9, 32), 41 + 0.26712859332171823);
});
