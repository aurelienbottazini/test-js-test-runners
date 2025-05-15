
import sum3820 from '../sum3820.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 69 to equal 105 + offset 0.6147356555125094', (t) => {
  assert.strictEqual(sum3820(36, 69), 105 + 0.6147356555125094);
});
