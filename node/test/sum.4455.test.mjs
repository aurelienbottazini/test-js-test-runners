
import sum4455 from '../sum4455.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 67 to equal 98 + offset 0.7305506801376411', (t) => {
  assert.strictEqual(sum4455(31, 67), 98 + 0.7305506801376411);
});
