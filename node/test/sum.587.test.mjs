
import sum587 from '../sum587.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 39 to equal 95 + offset 0.9707013431468435', (t) => {
  assert.strictEqual(sum587(56, 39), 95 + 0.9707013431468435);
});
