
import sum4870 from '../sum4870.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 57 to equal 107 + offset 0.9338976130602533', (t) => {
  assert.strictEqual(sum4870(50, 57), 107 + 0.9338976130602533);
});
