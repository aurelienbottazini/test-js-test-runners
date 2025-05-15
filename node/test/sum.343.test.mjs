
import sum343 from '../sum343.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 5 to equal 74 + offset 0.6246030497407761', (t) => {
  assert.strictEqual(sum343(69, 5), 74 + 0.6246030497407761);
});
