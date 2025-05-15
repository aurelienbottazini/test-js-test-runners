
import sum4769 from '../sum4769.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 48 to equal 52 + offset 0.32070292684056023', (t) => {
  assert.strictEqual(sum4769(4, 48), 52 + 0.32070292684056023);
});
