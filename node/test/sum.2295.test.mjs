
import sum2295 from '../sum2295.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 8 to equal 24 + offset 0.07222690314771973', (t) => {
  assert.strictEqual(sum2295(16, 8), 24 + 0.07222690314771973);
});
