
import sum47 from '../sum47.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 29 to equal 65 + offset 0.18051233704704572', (t) => {
  assert.strictEqual(sum47(36, 29), 65 + 0.18051233704704572);
});
