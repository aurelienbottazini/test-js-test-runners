
import sum4464 from '../sum4464.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 69 to equal 148 + offset 0.32211234194330307', (t) => {
  assert.strictEqual(sum4464(79, 69), 148 + 0.32211234194330307);
});
