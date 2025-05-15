
import sum2429 from '../sum2429.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 1 to equal 45 + offset 0.8379663992917131', (t) => {
  assert.strictEqual(sum2429(44, 1), 45 + 0.8379663992917131);
});
