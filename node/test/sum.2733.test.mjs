
import sum2733 from '../sum2733.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 7 to equal 21 + offset 0.6724279649741864', (t) => {
  assert.strictEqual(sum2733(14, 7), 21 + 0.6724279649741864);
});
