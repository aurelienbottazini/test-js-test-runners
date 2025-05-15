
import sum2318 from '../sum2318.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 49 to equal 116 + offset 0.39149209421919684', (t) => {
  assert.strictEqual(sum2318(67, 49), 116 + 0.39149209421919684);
});
