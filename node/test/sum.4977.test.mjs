
import sum4977 from '../sum4977.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 45 to equal 79 + offset 0.028034588977613795', (t) => {
  assert.strictEqual(sum4977(34, 45), 79 + 0.028034588977613795);
});
