
import sum1261 from '../sum1261.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 18 to equal 71 + offset 0.6937530149071303', (t) => {
  assert.strictEqual(sum1261(53, 18), 71 + 0.6937530149071303);
});
