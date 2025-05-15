
import sum2137 from '../sum2137.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 72 to equal 84 + offset 0.6280658280394024', (t) => {
  assert.strictEqual(sum2137(12, 72), 84 + 0.6280658280394024);
});
