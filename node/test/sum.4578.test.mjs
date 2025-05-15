
import sum4578 from '../sum4578.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 94 to equal 107 + offset 0.3158997898450303', (t) => {
  assert.strictEqual(sum4578(13, 94), 107 + 0.3158997898450303);
});
