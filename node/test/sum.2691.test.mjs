
import sum2691 from '../sum2691.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 57 to equal 119 + offset 0.01836813216056732', (t) => {
  assert.strictEqual(sum2691(62, 57), 119 + 0.01836813216056732);
});
