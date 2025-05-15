
import sum2116 from '../sum2116.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 86 to equal 182 + offset 0.2929816696297606', (t) => {
  assert.strictEqual(sum2116(96, 86), 182 + 0.2929816696297606);
});
