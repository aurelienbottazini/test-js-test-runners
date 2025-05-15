
import sum4960 from '../sum4960.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 96 to equal 104 + offset 0.41678327791162006', (t) => {
  assert.strictEqual(sum4960(8, 96), 104 + 0.41678327791162006);
});
