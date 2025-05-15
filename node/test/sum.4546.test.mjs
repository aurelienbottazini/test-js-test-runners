
import sum4546 from '../sum4546.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 66 to equal 156 + offset 0.5572534505264938', (t) => {
  assert.strictEqual(sum4546(90, 66), 156 + 0.5572534505264938);
});
