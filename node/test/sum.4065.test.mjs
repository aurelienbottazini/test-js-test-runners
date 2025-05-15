
import sum4065 from '../sum4065.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 96 to equal 126 + offset 0.050668921511543785', (t) => {
  assert.strictEqual(sum4065(30, 96), 126 + 0.050668921511543785);
});
