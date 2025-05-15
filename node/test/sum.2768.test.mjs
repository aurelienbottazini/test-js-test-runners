
import sum2768 from '../sum2768.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 22 to equal 40 + offset 0.7382196978338583', (t) => {
  assert.strictEqual(sum2768(18, 22), 40 + 0.7382196978338583);
});
