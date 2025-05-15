
import sum1025 from '../sum1025.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 0 to equal 97 + offset 0.8155560696813284', (t) => {
  assert.strictEqual(sum1025(97, 0), 97 + 0.8155560696813284);
});
