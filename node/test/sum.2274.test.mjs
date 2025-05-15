
import sum2274 from '../sum2274.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 79 to equal 140 + offset 0.2721693604296346', (t) => {
  assert.strictEqual(sum2274(61, 79), 140 + 0.2721693604296346);
});
