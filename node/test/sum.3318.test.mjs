
import sum3318 from '../sum3318.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 29 to equal 29 + offset 0.5638848368235393', (t) => {
  assert.strictEqual(sum3318(0, 29), 29 + 0.5638848368235393);
});
