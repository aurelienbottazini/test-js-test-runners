
import sum2402 from '../sum2402.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 9 to equal 90 + offset 0.5764521756265806', (t) => {
  assert.strictEqual(sum2402(81, 9), 90 + 0.5764521756265806);
});
