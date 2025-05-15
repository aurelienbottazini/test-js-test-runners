
import sum314 from '../sum314.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 85 to equal 98 + offset 0.8940986541208891', (t) => {
  assert.strictEqual(sum314(13, 85), 98 + 0.8940986541208891);
});
