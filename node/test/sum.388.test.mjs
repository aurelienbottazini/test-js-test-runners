
import sum388 from '../sum388.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 58 to equal 111 + offset 0.2578299475574588', (t) => {
  assert.strictEqual(sum388(53, 58), 111 + 0.2578299475574588);
});
