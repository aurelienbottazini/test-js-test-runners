
import sum3354 from '../sum3354.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 54 to equal 108 + offset 0.8628607852907146', (t) => {
  assert.strictEqual(sum3354(54, 54), 108 + 0.8628607852907146);
});
