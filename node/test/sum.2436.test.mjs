
import sum2436 from '../sum2436.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 42 to equal 112 + offset 0.07331225797078611', (t) => {
  assert.strictEqual(sum2436(70, 42), 112 + 0.07331225797078611);
});
