
import sum3747 from '../sum3747.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 34 to equal 113 + offset 0.2133787448778096', (t) => {
  assert.strictEqual(sum3747(79, 34), 113 + 0.2133787448778096);
});
