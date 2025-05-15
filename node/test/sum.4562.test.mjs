
import sum4562 from '../sum4562.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 23 to equal 92 + offset 0.8461417346087504', (t) => {
  assert.strictEqual(sum4562(69, 23), 92 + 0.8461417346087504);
});
