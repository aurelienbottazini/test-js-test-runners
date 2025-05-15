
import sum4781 from '../sum4781.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 72 to equal 87 + offset 0.8018910076449645', (t) => {
  assert.strictEqual(sum4781(15, 72), 87 + 0.8018910076449645);
});
