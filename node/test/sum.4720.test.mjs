
import sum4720 from '../sum4720.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 9 to equal 96 + offset 0.9479764974610615', (t) => {
  assert.strictEqual(sum4720(87, 9), 96 + 0.9479764974610615);
});
