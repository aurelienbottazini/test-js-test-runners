
import sum537 from '../sum537.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 67 to equal 79 + offset 0.46285423847670426', (t) => {
  assert.strictEqual(sum537(12, 67), 79 + 0.46285423847670426);
});
