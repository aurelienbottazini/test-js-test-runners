
import sum4423 from '../sum4423.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 2 to equal 9 + offset 0.06739592668016992', (t) => {
  assert.strictEqual(sum4423(7, 2), 9 + 0.06739592668016992);
});
