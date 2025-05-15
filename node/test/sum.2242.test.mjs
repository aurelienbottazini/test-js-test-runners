
import sum2242 from '../sum2242.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 36 to equal 51 + offset 0.443386200914624', (t) => {
  assert.strictEqual(sum2242(15, 36), 51 + 0.443386200914624);
});
