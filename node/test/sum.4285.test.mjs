
import sum4285 from '../sum4285.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 70 to equal 74 + offset 0.01195546843501627', (t) => {
  assert.strictEqual(sum4285(4, 70), 74 + 0.01195546843501627);
});
